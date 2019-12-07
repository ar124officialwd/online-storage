import { CustomFile } from './../custom-file';
import { join } from 'path';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faWindowClose, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { File } from 'api';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  faWindowClose = faWindowClose;
  faInfo = faInfo;

  @Output() fileEvent = new EventEmitter<any>();
  @Input() location;
  @Input() existingNames;
  errorMessage = undefined;
  file: any;
  fileName = '';
  selectedFiles: CustomFile[] = [];
  uploading = false;
  help = false;
  progress = '';
  progressCount = 1;

  constructor(private fs: FileSystemService) { }

  ngOnInit() {
  }

  addSelectedFile() {
    console.log(this.existingNames);
    this.errorMessage = '';

    const fileElement = document.getElementById('file') as HTMLInputElement;
    const file = fileElement.files.item(0) as CustomFile;
    file.newName = this.fileName || file.name;
    const parts = file.name.split('.');
    if (parts.length > 1) {
      file.newName += '.' +  parts[parts.length - 1];
    }

    // skip adding if file is already there
    let index = this.selectedFiles.findIndex((f) => {
      return f === file;
    });

    if (index > 0) {
      return;
    }

    index = this.existingNames.findIndex((n) => {
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

  closeModel() {
    this.fileEvent.emit(null);
  }

  removeFile(s) {
    const index = this.selectedFiles.findIndex((f) => {
      return f === s;
    });

    this.selectedFiles.splice(index, 1);
  }

  toggleHelp() {
    if (this.help) {
      this.help = false;
    } else {
      this.help = true;
    }
  }

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
    const names = [];

    for (const s of this.selectedFiles) {
      formData.append('file[]', s);
      formData.append('name[]', s.newName);
    }

    formData.append('location', this.location);

    this.fs.uploadFiles(formData).subscribe((res: File[]) => {
      clearInterval(interval);

      for (const r of res) {
        this.fileEvent.emit(r);
      }

      this.fileEvent.emit(null);
    }, (err) => {
      clearInterval(interval);
      this.errorMessage = 'Some kind of error occured while upload files';
      mainElement.style.opacity = '1';
      this.uploading = false;

      const offsetTop = document.getElementById('error').offsetTop;
      mainElement.scrollTop = offsetTop;
    });
  }

  validateFileName() {
    const matches = this.fileName.match(/[0-9a-zA-Z-_\.]*/g);
    return matches.length <= 2;
  }

}
