import { ExtendedFile } from './extended-file';
import { ExtendedDirectory } from './extended-directory';
import { Directory } from 'api';
import { Injectable, EventEmitter } from '@angular/core';
import { FileSystemService } from './file-system.service';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CwdService {
  backStack = []; // previously directories
  clipboard = []; // clipboard to hold cut/copied entries
  cwd: ExtendedDirectory;
  forwardStack = []; // opened directories
  keep = false; // is clipboard cut or copy
  markedCwd: ExtendedDirectory; // clipoard directory


  /* events */
  clipboardEvent = new EventEmitter(); // clipboard changed
  cwdEvent = new EventEmitter<ExtendedDirectory>(); // cwd changed
  keepEvent = new EventEmitter(); // changed from/to copy/cut

  constructor(private fs: FileSystemService) {
    this.fs.getEntries()
      .pipe(
        map(res => this.setIds(res as ExtendedDirectory))
      )
      .subscribe((res) => {
        this.cwd = res;
        this.cwdEvent.emit(this.cwd);
      });
  }

  /* whether there is a previous directory */
  canGoBack() {
    return this.backStack.length >= 1;
  }

  /* whether there is a forward directory */
  canGoForward() {
    return this.forwardStack.length >= 1;
  }

  private fetchEntries() {
    if (!this.cwd) {
      this.fs.getEntries()
        .pipe(
          map(res => this.setIds(res as ExtendedDirectory))
        )
        .subscribe((res) => {
          this.cwd = res;
        });
      }
  }

  /* get Clipboard */
  getClipboard() {
    return this.clipboard;
  }

  /* return current working directory */
  getCwd() {
    return this.cwd;
  }

  /* return subdirectories of current directory */
  getDirectories() {
    return from(this.cwd.contents.directories);
  }

  /* return files of current directory */
  getFiles() {
    return from(this.cwd.contents.files);
  }

  /* return keep status of clipboard */
  getKeep() {
    return this.keep;
  }

  /* return marked entry */
  getMarkedDirectory() {
    return this.markedCwd;
  }

  /* return existing names */
  getNames() {
    const names = [];

    for (const d of this.cwd.contents.directories) {
      names.push(d.name);
    }

    for (const f of this.cwd.contents.files) {
      names.push(f.name + f.extension);
    }

    return names;
  }

  /* mark entry, so it may be accesssed later
    * its use case is copying/movings files/directories where you need
      access that directory
  */
  markCwd() {
    this.markedCwd = this.cwd;
  }

  /* open directory, change cwd to one of its children */
  openDirectory(directory) {
    const ref = this.cwd;
    this.cwd = directory;
    this.backStack.push(ref);

    this.cwdEvent.emit(this.cwd);
  }

  /* go back to previous directory */
  previousDirectory() {
    if (this.backStack.length) {
      const ref = this.cwd;
      this.cwd = this.backStack.pop() as ExtendedDirectory;
      this.forwardStack.push(ref);
    }

    this.cwdEvent.emit(this.cwd);
  }

  /* push new files and directories to cwd */
  pushEntries(entries) {
    for (const e of entries) {
      if (e.mediaType === 'directory') {
        this.cwd.contents.directories.push(e);
      } else {
        this.cwd.contents.files.push(e);
      }
    }
  }

  /* new directories created, push them to cwd */
  pushToDirectories(directories) {
    for (const d of directories) {
      this.cwd.contents.directories.push(d);
    }
    this.cwdEvent.emit(this.cwd);
  }

  /* new files uploaded, push them to cwd */
  pushToFiles(files) {
    for (const f of files) {
      this.cwd.contents.files.push(f);
    }
    this.cwdEvent.emit(this.cwd);
  }

  /* remove deleted entries */
  removeEntries(entries) {
    for (const e of entries) {
      if (e.mediaType === 'directory') {
        const index = this.cwd.contents.directories.findIndex(i => {
          return e.location === i.location;
        });
        this.cwd.contents.directories.splice(index, 1);
      } else {
        const index = this.cwd.contents.files.findIndex(i => {
          return e.location === i.location;
        });
        this.cwd.contents.files.splice(index, 1);
      }
    }

    this.cwdEvent.emit(this.cwd);
  }

  /* remove Entries from `marked cwd` */
  removeFromMarkedCwd(entries) {
    for (const e of entries) {
      if (e.mediaType === 'directory') {
        const index = this.markedCwd.contents.directories.findIndex(i => {
          return e.location === i.location;
        });
        this.markedCwd.contents.directories.splice(index, 1);
      } else {
        const index = this.markedCwd.contents.files.findIndex(i => {
          return e.location === i.location;
        });
        this.markedCwd.contents.files.splice(index, 1);
      }
    }
  }

  /* reopen previously opened directory */
  reopenDirectory() {
    if (this.forwardStack.length) {
      const ref = this.cwd;
      this.cwd = this.forwardStack.pop() as ExtendedDirectory;
      this.backStack.push(ref);
    }
    this.cwdEvent.emit(this.cwd);
  }

  /* set clipboard to access that entries later */
  setClipboard(entries, keep) {
    this.clipboard = entries;
    this.keep = keep;
  }

  private setIds(directory: ExtendedDirectory): ExtendedDirectory {
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

    return directory;
  }

  /* un-mark working directory marked by 'markCwd' */
  unmarkDirectory() {
    this.markedCwd = null;
  }
}