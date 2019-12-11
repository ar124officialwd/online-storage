import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ExtendedFile } from './../extended-file';
import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { MimeTypesService } from '../mime-types.service';
import { FileSystemService } from '../file-system.service';

@Component({
  selector: 'app-open-media',
  templateUrl: './open-media.component.html',
  styleUrls: ['./open-media.component.scss']
})
export class OpenMediaComponent implements OnInit, OnChanges {
  faWindowClose = faWindowClose;
  @Output() mediaClose = new EventEmitter<any>();
  @Input() media: ExtendedFile;
  notSupported = false;

  constructor(private ms: MimeTypesService,
              private fs: FileSystemService) { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.fs.downloadFile(this.media.location)
      .subscribe(res => {
        window.scrollTo(0, 0);
        
        const file = res;
        const media = document.getElementById('media');
        const mediaWindow = document.getElementById('mediaWindow');
        const mediaInfo = document.getElementById('mediaInfo');
        mediaInfo.setAttribute('style', 'text-align: center');
        let documentView;
        let documentSource;

        if (this.ms.image.includes(this.media.mediaType)) {
          documentView = document.createElement('img');
          documentView.setAttribute('style',
            'max-width: 98vw; max-height: 78vh; padding: 1vh 1vw;');
          documentSource = URL.createObjectURL(file);
          documentView.src = documentSource;
          mediaWindow.appendChild(documentView);
          mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
          mediaWindow.appendChild(mediaInfo);

        } else if (this.ms.text.includes(this.media.mediaType)) {
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

        } else if (this.ms.video.includes(this.media.mediaType)) {
          const video = document.createElement('video');
          video.setAttribute('style',
            'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
          const videoSource = document.createElement('source');
          const videoSourceURL = URL.createObjectURL(file);

          videoSource.src = videoSourceURL;
          videoSource.type = this.media.mediaType;
          video.controls = true;
          video.appendChild(videoSource);
          mediaWindow.appendChild(video);

          mediaInfo.innerHTML = `<b>Playing File</b>: ${this.media.name}`;
          mediaWindow.appendChild(mediaInfo);

          // URL.revokeObjectURL(videoSourceURL);
        } else if (this.ms.application.includes(this.media.mediaType)) {
          const appView = document.createElement('iframe');
          const appViewSource = URL.createObjectURL(file);

          appView.setAttribute('style',
            'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
          appView.src = appViewSource;
          mediaWindow.appendChild(appView);
          mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
          mediaWindow.appendChild(mediaInfo);
        } else {
          this.notSupported = true;
          const downloadElement =
            document.getElementById('download') as HTMLAnchorElement;
          const sourceUrl = URL.createObjectURL(file);
          downloadElement.href = sourceUrl;
          downloadElement.onclick = (() => {
            window.location.href = sourceUrl;
            //URL.revokeObjectURL(sourceUrl);
          });
        }
      }, (err) => {
        const elem = document.getElementById('error');
        const errElem = document.createElement('div');
        errElem.setAttribute('class', 'alert alert-danger');
        errElem.innerHTML = '<p><b>Error</b>: Some kind of error occured' +
          ' while downloading file.</p>';
      });
  }

  closeMedia() {
    this.mediaClose.emit(null);
  }
}
