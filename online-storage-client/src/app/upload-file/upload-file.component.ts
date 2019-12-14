import { Router } from '@angular/router';
import { CwdService } from './../cwd.service';
import { CustomFile } from './../custom-file';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faWindowClose, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { File } from 'api';
import { Sidebar } from '../sidebar';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent extends Sidebar implements OnInit {
  faWindowClose = faWindowClose;
  faInfo = faInfo;

  errorMessage = undefined;
  file: any;
  fileName = '';
  selectedFiles: CustomFile[] = [];
  uploading = false;
  help = false;
  progress = '';
  progressCount = 1;
  names: any;
  cwd: any;

  constructor(routerInstance: Router,
              private fs: FileSystemService,
              private cwdService: CwdService) {
                super(routerInstance);
                this.cwd = this.cwdService.getCwd();
                this.names = this.cwdService.getNames();
              }

  ngOnInit() {
  }

  addSelectedFile() {
    this.errorMessage = '';

    const fileElement = document.getElementById('file') as HTMLInputElement;
    const file = fileElement.files.item(0) as CustomFile;

    if (this.fileName !== '') {
      file.newName = this.fileName;
      const parts = file.name.split('.');
      if (parts.length > 1) {
        file.newName += '.' +  parts[parts.length - 1];
      }
    } else {
      file.newName = file.name;
    }

    // skip adding if file is already there
    let index = this.selectedFiles.findIndex((f) => {
      return f === file;
    });

    if (index > 0) {
      return;
    }

    index = this.names.findIndex((n) => {
      return n === file.newName;
    });

    if (index > 0) {
      this.errorMessage = 'A file with same name exist in current directory.' +
        ' Try with new name.';
      return;
    }

    // try to rename file if a file with same name is already there
    let matches = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const value = this.selectedFiles.find((f) => {
        return f.newName === file.newName;
      }, i);

      if (value) {
        matches++;
      }
    }

    if (matches) {
      const parts = file.newName.split('.');
      if (parts.length < 2) {
        file.newName += `(${matches})`;
      } else {
        parts[parts.length - 2] += `(${matches})`;
        file.newName = parts.join('.');
      }
    }

    this.selectedFiles.push(file);
  }

  /* open help about uploading */
  openHelp() {

  }

  removeFile(s) {
    const index = this.selectedFiles.findIndex((f) => {
      return f === s;
    });

    this.selectedFiles.splice(index, 1);
  }

  /* upload selected files */
  upload() {
    const mainElement = document.getElementById('main');
    mainElement.style.opacity = '0.1';

    this.uploading = true;
    const interval = setInterval(() => {
      this.progressCount = (this.progressCount + 1) % 6;
      this.progress = this.progress + '. ';

      if (this.progressCount >= 5) {
        this.progress = '';
      }
    }, 1000);

    const formData = new FormData();

    for (const s of this.selectedFiles) {
      formData.append('file[]', s);
      formData.append('name[]', s.newName);
    }
    formData.append('location', this.cwd.location);

    let uploadedFiles = [];
    this.fs.uploadFiles(formData).subscribe((res: File[]) => {
      clearInterval(interval);
      uploadedFiles = res;
    }, (err) => {
      clearInterval(interval);
      this.errorMessage = 'Some kind of error occured while upload files';
      mainElement.style.opacity = '1';
      this.uploading = false;

      const offsetTop = document.getElementById('error').offsetTop;
      mainElement.scrollTop = offsetTop;
    }, () => {
      this.cwdService.pushToFiles(uploadedFiles);
      this.closeModel();
    });
  }

  validateFileName() {
    const matches = this.fileName.match(/[0-9a-zA-Z-_\.]*/g);
    return matches.length <= 2;
  }

}
