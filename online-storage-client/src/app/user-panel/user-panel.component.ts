import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Directory, File, FileSystemEntry } from 'api';
import { hru } from '../hru';

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
  faArrowCircleUp,
  faArrowCircleRight,
  faArrowCircleLeft,
  faCheck,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import { FileSystemService } from '../file-system.service';

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
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleRight = faArrowCircleRight;
  faArrowCircleLeft = faArrowCircleLeft;
  faCheck = faCheck;
  faCheckCircle = faCheckCircle;
  hru = hru;

  triggers = {
    createDirectory: false,
    uploadFile: false
  };

  root = new Directory();
  currentDirectory = new Directory();
  forwardStack: Directory[] = [];
  backwardStack: Directory[] = [];

  maxStorage = 0;
  usage = 0;
  usagePercent = 0;

  selected = [];
  clipboard = [];
  keep = true;

  message = null;
  errorMessage = null;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private fs: FileSystemService
  ) {}

  ngOnInit() {
    if (!this.cookieService.get('login')) {
      this.router.navigateByUrl('/');
    }

    this.maxStorage = Number(this.cookieService.get('maxStorage'));

    this.fs.getEntries().subscribe((res: Directory) => {
      this.root = res;
      this.currentDirectory = this.root;

      this.usage = Number(this.root.size);
      this.usagePercent = (this.usage * 100) / this.maxStorage;
    });

  }

  /************************************************************************** */
  // ENTRY LEVEL OPERATIONS
  private copyEntries() {
    this.clipboard = this.selected;
    this.keep = true;
  }

  private cutEntries() {
    this.clipboard = this.selected;
    this.keep = false;
  }

  private deleteEntry(entry) {
    this.clipboard = [entry];
    this.deleteEntries();
  }

  private deleteEntries() {
    this.fs.deleteEntries(this.selected).subscribe((res: any) => {
      if (res.mediaType === 'directory') {
        const index = this.currentDirectory.contents.directories.findIndex(
          e => {
            return e.location === res.location;
          }
        );
        this.currentDirectory.contents.directories.splice(index, 1);
      } else {
        const index = this.currentDirectory.contents.files.findIndex(e => {
          return e.location === res.location;
        });
        this.currentDirectory.contents.files.splice(index, 1);
      }
    });
    this.selected = [];
  }

  private pasteEntries() {
    this.errorMessage = '';
    this.message = '';

    const copyObjects = [];

    for (const s of this.clipboard) {
      const from = JSON.parse(JSON.stringify(s)); // original
      const to = JSON.parse(JSON.stringify(this.currentDirectory)); // new
      to.name = from.name;
      to.mediaType = from.mediaType;
      to.size = from.size;
      to.extension = from.extension || undefined;
      to.location = to.location + '/' + from.name + from.extension || '';
      copyObjects.push({
        from,
        to
      });
    }

    this.fs
      .copy({
        pairs: copyObjects,
        keep: this.keep
      })
      .subscribe(
        (res: any[]) => {
          for (const r of res) {
            if (r.mediaType === 'directory') {
              this.currentDirectory.contents.directories.push(r);
            } else {
              this.currentDirectory.contents.files.push(r);
            }
          }
        },
        err => {
          if (this.keep) {
            this.errorMessage =
              'Some kind of error occured while copying files!';
          } else {
            this.errorMessage =
              'Some kind of error occured while moving files!';
          }
        }
      );
  }

  renameEntry(entry, newName) {
    if (entry.name === newName) {
      return;
    }

    const targetEntry = entry;
    const newEntry = JSON.parse(JSON.stringify(targetEntry));
    newEntry.name = newName.match(/[\w\.-]*/g).join('');
    newEntry.location = newEntry.location.replace(
      targetEntry.name,
      newEntry.name
    );

    this.fs
      .copy({
        pairs: [
          {
            from: targetEntry,
            to: newEntry
          }
        ],
        keep: false
      })
      .subscribe((res: FileSystemEntry[]) => {
        if (entry.mediaType !== 'directory') {
          const index = this.currentDirectory.contents.files.findIndex(e => {
            return (e.location = targetEntry.location);
          });
          this.currentDirectory.contents.files.splice(index, 1);
          this.currentDirectory.contents.files.push(res[0] as File);
        } else {
          const index = this.currentDirectory.contents.directories.findIndex(
            e => {
              return (e.location = targetEntry.location);
            }
          );
          this.currentDirectory.contents.directories.splice(index, 1);
          this.currentDirectory.contents.directories.push(res[0] as Directory);
        }
      });
  }

  /************************************************************************** */
  // DIRECTORY LEVEL OPERATIONS

  private createDirectory(directory) {
    if (!directory) {
      this.triggers.createDirectory = false;
    } else {
      this.currentDirectory.contents.directories.push(directory);
      this.triggers.createDirectory = false;
    }
  }

  private openDirectory(directory) {
    const ref = this.currentDirectory;
    this.currentDirectory = directory;
    this.backwardStack.push(ref);
  }

  private previousDirectory() {
    if (this.backwardStack.length) {
      const ref = this.currentDirectory;
      this.currentDirectory = this.backwardStack.pop();
      this.forwardStack.push(ref);
      this.selected = [];
    }
  }

  private reopenDirectory() {
    if (this.forwardStack.length) {
      const ref = this.currentDirectory;
      this.currentDirectory = this.forwardStack.pop();
      this.backwardStack.push(ref);
      this.selected = [];
    }
  }

  /************************************************************************** */
  // FILE LEVEL OPERATIONS

  uploadFile(file) {
    this.triggers.uploadFile = false;
    if (file) {
      this.currentDirectory.contents.files.push(file);
      this.usage += file.size;
      this.usagePercent = (this.usage * 100) / this.maxStorage;
    }
  }

  private downloadFile(name, location) {
    this.fs.downloadFile(location).subscribe(
      (res: Blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(res);
        link.download = name;
        link.click();
        URL.revokeObjectURL(link.href);
      },
      err => {
        this.errorHandler('Downlaod File', err);
      }
    );
  }

  /************************************************************************** */
  // CLASS LEVEL OPERATIONS

  private checkInputCharacter(event) {
    const str = String.fromCharCode(event.charCode);
    if (!str.match(/[a-zA-Z0-9\.-_]/)) {
      return false;
    }
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
    this.router.navigateByUrl('/user-entry');
  }

  private select(entry, event) {
    if (event.target.id === 'selectAll') {
      if (event.target.checked) {
        this.selected = JSON.parse(
          JSON.stringify(this.currentDirectory.contents.directories)
        );
        for (const f of this.currentDirectory.contents.files) {
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
        const index = this.selected.findIndex(i => {
          return i === entry;
        });
        this.selected.splice(index, 1);
      }
    }
  }

  private trigger(name) {
    this.triggers.createDirectory = false;
    this.triggers.uploadFile = false;

    switch (name) {
      case 'createDirectory':
        this.triggers.createDirectory = true;
        break;
      case 'uploadFile':
        this.triggers.uploadFile = true;
        break;
      default:
        break;
    }
  }

  private errorHandler(action, error) {
    switch (action) {
      case 'Create Directory':
        this.errorMessage =
          'Some kind of error occurred while creating directory';
        break;
      case 'Open Directory':
        this.errorMessage =
          'Some kind of error occurred while opening directory';
        break;
      default:
        break;
    }
  }
}
