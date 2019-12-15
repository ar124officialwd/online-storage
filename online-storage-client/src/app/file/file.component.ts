import { ExtendedFile } from './../extended-file';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faDownload, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { stopEventPropagation } from '../stopEventPropagation';
import { hru } from '../hru';
import { MimeTypesService } from '../mime-types.service';
import { CookieService } from 'ngx-cookie-service';
import { CwdService } from '../cwd.service';
import { Router } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  animations: [
    trigger('audioAnimation', [
      transition('np => pa', [
        query('audio, button', [
          style({
            position: 'relative',
            top: 0,
            left: '100%'
          }),

          animate('0.3s ease-in', style({left: 0}))
        ], {
          optional: true
        })
      ]),

      transition('pa => np', [
        query('audio, button', [
          animate('0.3s ease-out', style({opacity: 0}))
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class FileComponent implements OnInit {
  @Input() file: ExtendedFile;

  faTrash = faTrash;
  faDownload = faDownload;
  faWindowClose = faWindowClose;
  hru = hru;

  stopEventPropagation = stopEventPropagation;
  itemName: HTMLElement;
  audio: any;
  nameField: HTMLElement;
  playingAudio: any;
  itemNameClass: any;

  constructor(private fs: FileSystemService,
              private mts: MimeTypesService,
              private cookieService: CookieService,
              private cwdService: CwdService,
              private router: Router) { }

  ngOnInit() {
    /* watch for event, if another file starts, close audio */
    this.cwdService.playingAudioEvent
      .subscribe(stop => {
        if (this.playingAudio) {
          this.stopAudio();
          this.playingAudio = false;
        }
      });
  }

  deleteFile() {
    this.fs.deleteEntries([this.file.location + ':' + this.file.mediaType])
      .subscribe(res => {
        this.cwdService.removeEntries([this.file]);
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
      this.playingAudio = true;

      /* replace name field with audio player */
      this.nameField = document.getElementById(this.file.id);
      this.itemName = document.querySelector(`#${this.file.id} .item-name`) as HTMLElement;
      this.itemNameClass = this.itemName.getAttribute('class');
      this.audio = document.createElement('audio');

      // highlight item name
      this.itemName.setAttribute('class', this.itemNameClass + ' ' +
        'flex-item alert alert-sm alert-primary p-0 ml-2');

      /* prepare audio */
      let location = this.file.location;
      // trim leading /
      if (location[0] === '/') {
        location = location.slice(1);
      }
      location = location.replace('/', '%2F');
      this.audio.src = 'http://' + this.cookieService.get('login') + ':' +
        '@127.0.0.1:3000/fileSystem/' + location;
      this.audio.controls = true;
      this.audio.addEventListener('complete', ((ev) => {
        stopEventPropagation(ev);
        this.stopAudio();
      }).bind(this));
      this.audio.setAttribute('class', 'alert alert-sm ml-2 p-0');

      /* add audio */
      this.nameField.appendChild(this.audio);
      this.cwdService.setPlayingAudio(true);
    } else {
      this.cwdService.markFile(this.file);
      this.router.navigateByUrl('/open-media');
    }
  }

  private stopAudio() {
    this.playingAudio = false;
    this.nameField.removeChild(this.audio);
    this.nameField.appendChild(this.itemName);
    this.itemName.setAttribute('class', this.itemNameClass);
  }

  private error(action, err) {

  }
}
