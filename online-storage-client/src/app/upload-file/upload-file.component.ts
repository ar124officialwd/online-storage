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
  errorMessage = undefined;
  file: any;
  fileName = '';
  uploading = false;
  help = false;
  progress = '';
  progressCount = 1;

  constructor(private fs: FileSystemService) { }

  ngOnInit() {
  }

  closeModel() {
    this.fileEvent.emit(null);
  }

  toggleHelp() {
    this.help = !this.help;
  }

  upload() {
    const mainElement = document.getElementById('main');
    this.uploading = true;
    const interval = setInterval(() => {
      this.progressCount = (this.progressCount + 1) % 6;
      this.progress = this.progress + '. ';

      if (this.progressCount >= 5) {
        this.progress = '';
      }
    }, 1000);

    const formData = new FormData();
    mainElement.style.opacity = '0.1';
    const fileElement = document.getElementById('file') as HTMLInputElement;

    formData.append('file', fileElement.files[0]);
    formData.append('location', this.location);
    formData.append('targetName', this.fileName);

    this.fs.uploadFile(formData).subscribe((res: File) => {
      clearInterval(interval);
      this.fileEvent.emit(res);
    }, (err) => {
      this.errorMessage = 'Some kind of error occured while upload file';
    });
  }

  validateFileName() {
    const matches = this.fileName.match(/[0-9a-zA-Z-_\.]*/g);
    return matches.length <= 2;
  }

}
