import { CwdService } from './../cwd.service';
import { ExtendedDirectory } from './../extended-directory';
import { ExtendedFile } from './../extended-file';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { hru } from '../hru';
import { stopEventPropagation } from '../stopEventPropagation';
import * as path from 'path';

import {
  faFolder,
  faFile,
  faFolderPlus,
  faFileUpload,
  faDownload,
  faCopy,
  faCut,
  faPaste,
  faTrash,
  faPowerOff,
  faArrowCircleUp,
  faArrowCircleRight,
  faArrowCircleLeft,
  faCheck,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import { FileSystemService } from '../file-system.service';
import { MimeTypesService } from '../mime-types.service';
import { FileSystemEntry } from 'api';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  faFolder = faFolder;
  faFile = faFile;
  faFolderPlus = faFolderPlus;
  faFileUpload = faFileUpload;
  faDownload = faDownload;
  faCopy = faCopy;
  faCut = faCut;
  faPaste = faPaste;
  faTrash = faTrash;
  faPowerOff = faPowerOff;
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleRight = faArrowCircleRight;
  faArrowCircleLeft = faArrowCircleLeft;
  faCheck = faCheck;
  faCheckCircle = faCheckCircle;
  hru = hru;
  stopEventPropagation = stopEventPropagation;

  triggers = {
    createDirectory: false,
    uploadFile: false
  };

  root = new ExtendedDirectory(); // root directory of user
  cwd = new ExtendedDirectory(); // current working directory

  maxStorage = 0; // max size of user storage
  usage = 0; // size consumed by user files/directories
  usagePercent = 0; // % size consumed by user files/directories

  selected = []; // current selection of files/directories
  clipboard = []; // clipboard, cut/copied files/directories
  clipboardDirectory = null; // clipboard directory from where cut/copied
  keep = true; // whether to cut(clean) or to copy(keep) after paste

  message = null;
  errorMessage = null;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private fs: FileSystemService,
    private cwdService: CwdService
  ) {
    this.clipboard = cwdService.getClipboard();
    this.keep = cwdService.getKeep();
  }

  ngOnInit() {
    if (!this.cookieService.get('login')) {
      this.router.navigateByUrl('/');
    }
    this.maxStorage = Number(this.cookieService.get('maxStorage'));

    // watch for changes of current directory
    this.cwdService.cwdEvent
      .subscribe((cwd: ExtendedDirectory) => {
        this.cwd = cwd;
        this.usage = Number(this.cwd.size);
        this.usagePercent = (this.usage * 100) / this.maxStorage;
      }, (err) => {
        console.log(err);
      }, () => {
        document.getElementById('sidebar').style.zIndex = '-1';
        document.getElementById('main').style.zIndex = '1';
      });
  }

  /************************************************************************** */
  // ENTRY LEVEL OPERATIONS
  private copyEntries() {
    this.clipboard = this.selected;
    this.clipboardDirectory = this.cwd;
    this.keep = true;
    this.selected = [];

    const checkboxs = Array.from(
      document.querySelectorAll('input[type=checkbox]')
    );
    for (const e of checkboxs) {
      e.removeAttribute('checked');
    }
  }

  private cutEntries() {
    this.clipboard = this.selected;
    this.clipboardDirectory = this.cwd;
    this.keep = false;
    this.cwdService.markCwd();
    this.selected = [];

    const checkboxs = Array.from(
      document.querySelectorAll('input[type=checkbox]')
    );
    for (const e of checkboxs) {
      e.removeAttribute('checked');
    }
  }

  private deleteEntries() {
    let locations = '';

    for (const s of this.selected) {
      locations += s.location + ':' + s.mediaType + ';';
    }

    const locationsParts = locations.split(';');
    locations = locationsParts.slice(0, locationsParts.length - 1).join(';');

    let deletedEntries = [];
    this.fs.deleteEntries(locations)
      .subscribe((res) => {
        deletedEntries = res;
      }, (err) => {
        // Todo(display error message)
      }, () => {
        this.cwdService.removeEntries(deletedEntries);
      });

    this.selected = [];
  }

  private isCut(entry) {
    const index = this.clipboard.findIndex(c => {
      return c.name === entry.name;
    });
    return !this.keep && index >= 0;
  }

  private isCopied(entry) {
    const index = this.clipboard.findIndex(c => {
      return c.name === entry.name;
    });
    return this.keep && index >= 0;
  }

  private isSelected(entry) {
    const index = this.selected.findIndex(s => {
      return s.name === entry.name;
    });
    return index >= 0;
  }

  /* paste copied/cut directories and files */
  private pasteEntries() {
    this.errorMessage = '';
    this.message = '';

    // prepare copy pairs(from & to objects) */
    const copyObjects = [];
    for (const s of this.clipboard) {
      const from = JSON.parse(JSON.stringify(s)); // original
      const to = JSON.parse(JSON.stringify(this.cwd)); // new
      to.name = from.name;
      to.mediaType = from.mediaType;
      to.size = from.size;
      to.extension = from.extension || undefined;
      if (from.mediaType !== 'directory') {
        to.location = to.location + path.sep + from.name + from.extension;
      } else {
        to.location = to.location + path.sep + from.name;
      }

      copyObjects.push({
        from,
        to
      });
    }

    let pastedEntries = [];
    this.fs
      .copy({
        pairs: copyObjects,
        keep: this.keep
      })
      .subscribe(
        (res: any[]) => {
          pastedEntries = res;
        },
        (err) => {
          if (this.keep) {
            this.errorMessage =
              'Some kind of error occured while copying files!';
          } else {
            this.errorMessage =
              'Some kind of error occured while moving files!';
          }

          this.clipboard = [];
          this.keep = true;
        },
        () => {
          // clean if moving entries
          if (!this.keep) {
            this.cwdService.removeFromMarkedCwd(pastedEntries);
          }

          this.cwdService.pushEntries(pastedEntries);
          this.cwdService.unmarkDirectory();
          this.clipboard = [];
          this.keep = true;
        }
      );
  }

  private select(entry, event) {
    if (event.target.id === 'selectAll') {
      if (event.target.checked) {
        this.selected = JSON.parse(
          JSON.stringify(this.cwd.contents.directories)
        );
        for (const f of this.cwd.contents.files) {
          this.selected.push(JSON.parse(JSON.stringify(f)));
        }

        const checkboxs = Array.from(
          document.querySelectorAll('input[type=checkbox]')
        );
        for (const e of checkboxs) {
          e.setAttribute('checked', 'true');
        }

      } else {
        this.selected = [];
        const checkboxs = Array.from(
          document.querySelectorAll('input[type=checkbox]')
        );
        for (const e of checkboxs) {
          e.removeAttribute('checked');
        }
      }

    } else {
      if (event.target.checked) {
        this.selected.push(entry);
      } else {
        const index = this.selected.findIndex(s => {
          return s.name === entry.name;
        });
        this.selected.splice(index, 1);
      }
    }
  }

  renameEntry(entry, newName) {
    if (entry.name === newName) {
      return;
    }

    const sourceEntry = entry;
    const newEntry = JSON.parse(JSON.stringify(sourceEntry));
    newEntry.name = newName.match(/[\w\.-]*/g).join('');
    newEntry.location = newEntry.location.replace(
      sourceEntry.name,
      newEntry.name
    );

    this.fs
      .copy({
        pairs: [
          {
            from: sourceEntry,
            to: newEntry
          }
        ],
        keep: false
      })
      .subscribe((res: FileSystemEntry[]) => {
        if (sourceEntry.mediaType !== 'directory') {
          const index = this.cwd.contents.files.findIndex(e => {
            return (e.location === sourceEntry.location);
          });
          this.cwd.contents.files.splice(index, 1);
          this.cwd.contents.files.push(res[0] as ExtendedFile);
        } else {
          const index = this.cwd.contents.directories.findIndex(
            e => {
              return (e.location === sourceEntry.location);
            }
          );
          this.cwd.contents.directories.splice(index, 1);
          this.cwd.contents.directories.push(
            res[0] as ExtendedDirectory);
        }
      });
  }

  canGoBack() {
    return this.cwdService.canGoBack();
  }

  canGoForward() {
    return this.cwdService.canGoForward();
  }

  private createDirectories() {
    this.router.navigate([{ outlets: {sidebar: 'create-directories'} }]);
  }

  private previousDirectory() {
    this.cwdService.previousDirectory();
    this.selected = [];
  }

  private reopenDirectory() {
    this.cwdService.reopenDirectory();
    this.selected = [];
  }

  uploadFiles() {
    this.router.navigate([{ outlets: {sidebar: 'upload-files'} }]);
  }

  private getUsageClass() {
    if (this.usage < 25) {
      return 'alert alert-sm alert-success';
    } else if (this.usage < 50) {
      return 'alert alert-sm alert-primary';
    } else if (this.usage < 75) {
      return 'alert alert-sm alert-warning';
    } else {
      return 'alert alert-sm alert-danger';
    }
  }

  private logout() {
    this.cookieService.delete('login');
    this.cookieService.delete('firstName');
    this.cookieService.delete('secondName');
    this.cookieService.delete('maxStorage');
    this.router.navigateByUrl('/login');
  }
}
