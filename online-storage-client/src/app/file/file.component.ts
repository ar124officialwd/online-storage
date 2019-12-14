import { ExtendedFile } from './../extended-file';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { stopEventPropagation } from '../stopEventPropagation';
import { hru } from '../hru';
import { MimeTypesService } from '../mime-types.service';
import { CookieService } from 'ngx-cookie-service';
import { CwdService } from '../cwd.service';
import { Router } from '@angular/router';

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
  itemName: HTMLElement;
  closeButton: any;
  audio: any;
  nameField: HTMLElement;
  payingAudio: any;

  constructor(private fs: FileSystemService,
              private mts: MimeTypesService,
              private cookieService: CookieService,
              private cwdService: CwdService,
              private router: Router) { }

  ngOnInit() {
    /* watch for event, if another file starts, close audio */
    this.cwdService.playingAudioEvent
      .subscribe(stop => {
        if (this.payingAudio) {
          this.stopAudio();
          this.payingAudio = false;
        }
      })
  }

  deleteFile() {
    this.fs.deleteEntries([this.file.location + ':' + this.file.mediaType])
      .subscribe(res => {
        this.removeMe.emit(this.file);
      }, (err => {
        this.error('Delete File', err);
      }));
  }

  downloadFile() {
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
    /* play audio files */
    if (this.mts.audio.includes(this.file.mediaType)) {
      /* first ask to close if already playing a file */
      this.cwdService.stopAudio();
      this.cwdService.setPlayingAudio(true);

      /* replace name field with audio player */
      this.nameField = document.getElementById(this.file.id);
      let itemName = document.querySelector(`#${this.file.id} .item-name`) as HTMLElement;
      this.audio = document.createElement('audio');
      this.closeButton = document.createElement('button')

      /* prepare audio */
      this.audio.src = 'http://' + this.cookieService.get('login') + ':' +
        '@127.0.0.1:3000/fileSystem/' +
        this.file.location.replace('/', '%2F');
      this.audio.controls = true;
      this.audio.addEventListener('complete', ((ev) => {
        stopEventPropagation(ev);
        this.stopAudio();
      }).bind(this));

      /* prepare close button */
      this.closeButton.innerText = 'x'
      this.closeButton.setAttribute('class', 'btn btn-sm btn-secondary ml-1 p-1');
      this.closeButton.addEventListener('click', ((ev) => {
        stopEventPropagation(ev);
        this.stopAudio();
      }).bind(this));

      // remove item name till audio plays */
      this.itemName = this.nameField.removeChild(itemName);

      /* add audio */
      this.nameField.appendChild(this.audio);
      this.nameField.appendChild(this.closeButton);

      this.payingAudio = true;
      this.cwdService.setPlayingAudio(true);
    } else {
      this.cwdService.markFile(this.file);
      this.router.navigateByUrl('/open-media');
    }
  }

  private stopAudio() {
    this.nameField.removeChild(this.audio);
    this.nameField.removeChild(this.closeButton);
    this.nameField.appendChild(this.itemName);
  }

  private error(action, err) {

  }
}
