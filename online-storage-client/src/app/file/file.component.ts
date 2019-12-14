import { ExtendedFile } from './../extended-file';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { stopEventPropagation } from '../stopEventPropagation';
import { hru } from '../hru';
import { MimeTypesService } from '../mime-types.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file: ExtendedFile;
  @Output() removeMe = new EventEmitter<ExtendedFile>();

  faTrash = faTrash;
  faDownload = faDownload;
  hru = hru;

  stopEventPropagation = stopEventPropagation;

  constructor(private fs: FileSystemService,
              private mts: MimeTypesService) { }

  ngOnInit() {
  }

  private deleteFile() {
    this.fs.deleteEntries([this.file.location + ':' + this.file.mediaType])
      .subscribe(res => {
        this.removeMe.emit(this.file);
      }, (err => {
        this.error('Delete File', err);
      }));
  }

  private downloadFile() {
    this.fs.downloadFile(this.file.location).subscribe(
      (res: Blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(res);
        link.download = name;
        link.click();
        URL.revokeObjectURL(link.href);
      },
      err => {
        this.error('Download File', err);
      }
    );
  }

  openFile() {

  }

  playFile() {
    /* play audio files */
    if (this.mts.audio.includes(this.file.mediaType)) {
      /* replace name field with audio player */
      const nameFiled = document.getElementById('name-field');
      let itemName = document.getElementById('item-name');
      const itemPlay = document.getElementById('item-play');
      const audio = document.createElement('audio');

      // remove item name till audio plays */
      itemName = nameFiled.removeChild(itemName);
    }
  }

  private error(action, err) {

  }
}
