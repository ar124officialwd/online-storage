import { Location } from '@angular/common';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ExtendedFile } from './../extended-file';
import { Component, OnInit }  from '@angular/core';
import { MimeTypesService } from '../mime-types.service';
import { FileSystemService } from '../file-system.service';
import { CwdService } from '../cwd.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-media',
  templateUrl: './open-media.component.html',
  styleUrls: ['./open-media.component.scss']
})
export class OpenMediaComponent implements OnInit {
  faWindowClose = faWindowClose;
  media: ExtendedFile;
  notSupported = false;

  constructor(private ms: MimeTypesService,
              private fs: FileSystemService,
              private cwdService: CwdService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.media = this.cwdService.getMarkedFile();
    if (!this.media) {
      this.closeMedia();
    }
    this.open();
  }

  open() {
    let location = this.media.location;
    // trim leading /
    if (location[0] === '/') {
      location = location.slice(1);
    }
    location = location.replace('/', '%2F');
    const fileUrl = 'http://' + this.cookieService.get('login') +
    '@127.0.0.1:3000/fileSystem/' + location;

    window.scrollTo(0, 0);

    const media = document.getElementById('media');
    const mediaWindow = document.getElementById('mediaWindow');
    const mediaInfo = document.getElementById('mediaInfo');
    mediaInfo.setAttribute('style', 'text-align: center');
    let documentView;

    /* source is image, display it */
    if (this.ms.image.includes(this.media.mediaType)) {
      documentView = document.createElement('img');
      documentView.setAttribute('style',
        'max-width: 98vw; max-height: 78vh; padding: 1vh 1vw;');
      documentView.src = fileUrl;
      mediaWindow.appendChild(documentView);
      mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
      mediaWindow.appendChild(mediaInfo);

    /* source is text file, display its content */
    } else if (this.ms.text.includes(this.media.mediaType)) {
      this.fs.downloadFile(this.media.location)
        .subscribe((res) => {
          const file = res;
          const reader = document.createElement('pre');
          reader.setAttribute('style',
            'width: 96vw; height: 76vh; padding: 1vh 1vw; margin: 1vh 1vw;' +
            'border: 1px solid black; border-radius: 10px;' +
            'overflow: auto;');
          reader.setAttribute('class', 'textReader');
          reader.setAttribute('contentEditable', 'true');
          reader.setAttribute('spellCheck', 'false');
          file.text().then((text) => {
            reader.innerText = text;
            mediaWindow.appendChild(reader);

            mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
            mediaWindow.appendChild(mediaInfo);
          });
        });
    /* source is video, play it */
    } else if (this.ms.video.includes(this.media.mediaType)) {
      const video = document.createElement('video');
      video.setAttribute('style',
        'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
      const videoSource = document.createElement('source');

      videoSource.src = fileUrl;
      videoSource.type = this.media.mediaType;
      video.controls = true;
      video.appendChild(videoSource);
      mediaWindow.appendChild(video);

      mediaInfo.innerHTML = `<b>Playing File</b>: ${this.media.name}`;
      mediaWindow.appendChild(mediaInfo);

    /* source is somekind of application file, open it */
    } else if (this.ms.application.includes(this.media.mediaType)) {
      const appView = document.createElement('iframe');
      const appViewSource = fileUrl;

      appView.setAttribute('style',
        'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
      appView.src = appViewSource;
      mediaWindow.appendChild(appView);
      mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
      mediaWindow.appendChild(mediaInfo);
    } else {
      this.fs.downloadFile(this.media.location)
        .subscribe(res => {
          const file = res;
          this.notSupported = true;
          const downloadElement =
            document.getElementById('download') as HTMLAnchorElement;
          const sourceUrl = URL.createObjectURL(file);
          downloadElement.href = sourceUrl;
          downloadElement.onclick = (() => {
            window.location.href = sourceUrl;
          });
        });
    }
  }

  closeMedia() {
    this.cwdService.unmarkFile();
    this.router.navigateByUrl('/user-panel');
  }
}
