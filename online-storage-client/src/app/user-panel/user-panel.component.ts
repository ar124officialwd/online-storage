import { ExtendedDirectory } from './../extended-directory';
import { ExtendedFile } from './../extended-file';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Directory, File, FileSystemEntry } from 'api';
import { hru } from '../hru';
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

  triggers = {
    createDirectory: false,
    uploadFile: false
  };

  root = new ExtendedDirectory();
  currentDirectory = new ExtendedDirectory();
  forwardStack: Directory[] = [];
  backwardStack: Directory[] = [];

  maxStorage = 0;
  usage = 0;
  usagePercent = 0;

  selected = [];
  clipboard = [];
  clipboardDirectory = null;
  keep = true;

  playingAudio = null;
  media = null;
  mediaOpened = false;

  message = null;
  errorMessage = null;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private fs: FileSystemService,
    private ms: MimeTypesService
  ) {}

  ngOnInit() {
    if (!this.cookieService.get('login')) {
      this.router.navigateByUrl('/');
    }

    this.maxStorage = Number(this.cookieService.get('maxStorage'));

    this.fs.getEntries().subscribe((res: Directory) => {
      this.root = res as ExtendedDirectory;
      this.setIds(this.root);
      this.currentDirectory = this.root;
      this.usage = Number(this.root.size);
      this.usagePercent = (this.usage * 100) / this.maxStorage;
    });

  }

  /************************************************************************** */
  // ENTRY LEVEL OPERATIONS
  private copyEntries() {
    this.clipboard = this.selected;
    this.clipboardDirectory = this.currentDirectory;
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
    this.clipboardDirectory = this.currentDirectory;
    this.keep = false;

    this.selected = [];
    const checkboxs = Array.from(
      document.querySelectorAll('input[type=checkbox]')
    );
    for (const e of checkboxs) {
      e.removeAttribute('checked');
    }
  }

  private deleteEntry(entry) {
    this.selected = [entry]; // array of one element
    this.deleteEntries();
  }

  private deleteEntries() {
    let locations = '';

    for (const s of this.selected) {
      locations += s.location + ':' + s.mediaType + ';';
    }

    const locationsParts = locations.split(';');
    locations = locationsParts.slice(0, locationsParts.length - 1).join(';');

    this.fs.deleteEntries(locations).subscribe((res) => {
      for (const r of res) {
        if (r.mediaType === 'directory') {
          const index = this.currentDirectory.contents.directories.findIndex(
            e => {
              return e.location === r.location;
            }
          );

          this.currentDirectory.contents.directories.splice(index, 1);
        } else {
          const index = this.currentDirectory.contents.files.findIndex(
            e => {
              return e.location === r.location;
            }
          );

          this.currentDirectory.contents.files.splice(index, 1);
        }
      }
    });

    this.selected = [];
  }

  private isCut(entry) {
    const index = this.clipboard.findIndex(c => {
      return c.name === entry.name;
    })
    return !this.keep && index >= 0;
  }

  private isCopied(entry) {
    const index = this.clipboard.findIndex(c => {
      return c.name === entry.name;
    })
    return this.keep && index >= 0;
  }

  private isSelected(entry) {
    const index = this.selected.findIndex(s => {
      return s.name === entry.name;
    })
    return index >= 0;
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
      if (from.mediaType !== 'directory') {
        to.location = to.location + path.sep + from.name + from.extension;
      } else {
        to.location = to.location + path.sep + from.name
      }

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

              const item = copyObjects.find((c) => {
                return c.to.name === r.name;
              });
              const index =
                this.clipboardDirectory.contents.directories.findIndex((d) => {
                  return d.name === item.from.name;
                });
              this.clipboardDirectory.contents.directories.splice(index, 1);
            } else {
              this.currentDirectory.contents.files.push(r);
              const item = copyObjects.find((c) => {
                return c.to.name === r.name;
              });
              const index =
                this.clipboardDirectory.contents.files.findIndex((d) => {
                  return d.name === item.from.name;
                });
              this.clipboardDirectory.contents.files.splice(index, 1);
            }
          }

          this.clipboard = [];
          this.keep = true;
        },
        err => {
          if (this.keep) {
            this.errorMessage =
              'Some kind of error occured while copying files!';
          } else {
            this.errorMessage =
              'Some kind of error occured while moving files!';
          }

          this.clipboard = [];
          this.keep = true;
        }
      );
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
          const index = this.currentDirectory.contents.files.findIndex(e => {
            return (e.location === sourceEntry.location);
          });
          this.currentDirectory.contents.files.splice(index, 1);
          this.currentDirectory.contents.files.push(res[0] as ExtendedFile);
        } else {
          const index = this.currentDirectory.contents.directories.findIndex(
            e => {
              return (e.location === sourceEntry.location);
            }
          );
          this.currentDirectory.contents.directories.splice(index, 1);
          this.currentDirectory.contents.directories.push(
            res[0] as ExtendedDirectory);
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
      this.usage += directory.size;
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
      this.currentDirectory = this.backwardStack.pop() as ExtendedDirectory;
      this.forwardStack.push(ref);
      this.selected = [];
    }
  }

  private reopenDirectory() {
    if (this.forwardStack.length) {
      const ref = this.currentDirectory;
      this.currentDirectory = this.forwardStack.pop() as ExtendedDirectory;
      this.backwardStack.push(ref);
      this.selected = [];
    }
  }

  /************************************************************************** */
  // FILE LEVEL OPERATIONS

  private closeFile(file) {
    this.mediaOpened = false;
    this.media = null;
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

  openFile(file) {
    if (this.ms.audio.includes(file.mediaType)) {
      this.playingAudio = '';
      const target =
        document.querySelector(`#${file.id}.item-content`);
      target.innerHTML = '';

      // purge other files if there are
      const audios = Array.from(document.getElementsByTagName('audio'));
      const contents = Array.from(document.getElementsByClassName('item-content'));
      for (const a of audios) {
        for (const c of contents) {
          if (c.contains(a)) {
            c.innerHTML = '';
          }
        }
      }

      // Audio Container
      const audioContainer = document.createElement('div');
      const buttonContainer = document.createElement('div');
      audioContainer.setAttribute('class', 'flex-grow');

      // Audio Element
      let audioSrc;
      const audioElement = document.createElement('audio');
      audioElement.setAttribute('type', file.mediaType);
      audioElement.controls = true;
      audioElement.loop = false;

      const end = (function(event) {
        event.stopPropagation();
        URL.revokeObjectURL(audioSrc);
        target.innerHTML = '';
        this.playingAudio = '';
      }).bind(this);

      audioElement.setAttribute('style', 'display: inline-block;');
      audioElement.addEventListener('complete', end);

      // Audio Close Element
      const audioCloseElement = document.createElement('button');
      audioCloseElement.innerText = 'x';
      audioCloseElement.addEventListener('click', end);
      audioCloseElement.setAttribute('style', 'display: inline-block;');
      audioCloseElement.setAttribute('class', 'btn btn-sm btn-secondary mx-1');

      this.fs.downloadFile(file.location)
        .subscribe((res: Blob) => {
          this.playingAudio = file.id;
          audioSrc = URL.createObjectURL(res);
          audioElement.src = audioSrc;
          audioContainer.appendChild(audioElement);
          buttonContainer.appendChild(audioCloseElement);
          target.appendChild(audioContainer);
          target.appendChild(buttonContainer);
          console.log(this.playingAudio);
        }, (err) => {
          return;
        });
    } else {
      this.media = file;
      this.mediaOpened = true;
    }
  }

  uploadFile(file) {
    if (file) {
      this.currentDirectory.contents.files.push(file);
      this.usage += file.size;
      this.usagePercent = (this.usage * 100) / this.maxStorage;
    } else {
      this.triggers.uploadFile = false;
    }
  }

  /************************************************************************** */
  // CLASS LEVEL OPERATIONS

  private checkInputCharacter(event) {
    const str = String.fromCharCode(event.charCode);
    if (!str.match(/[a-zA-Z0-9\.-_]/)) {
      return false;
    }
  }

  private getExistingNames() {
    const existingNames = [];

    for (const d of this.currentDirectory.contents.directories) {
      existingNames.push(d.name);
    }

    for (const f of this.currentDirectory.contents.files) {
      existingNames.push(f.name + f.extension);
    }

    return existingNames;
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

  private setIds(directory: ExtendedDirectory) {
    const setFileIds = (files: ExtendedFile[]) => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < files.length; i++) {
        files[i] = files[i] as ExtendedFile;
        files[i].id = 'File' + files[i].name.replace(/\./g, '');
      }
    };

    setFileIds(directory.contents.files);

    for (const d of directory.contents.directories) {
      this.setIds(d as ExtendedDirectory);
    }
  }

  stopEventPropagation(event) {
    event.stopPropagation();
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
