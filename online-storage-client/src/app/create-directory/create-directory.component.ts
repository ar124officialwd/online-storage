import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Directory } from 'api';
import { HttpClient } from '@angular/common/http';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { join } from 'path';

@Component({
  selector: 'app-create-directory',
  templateUrl: './create-directory.component.html',
  styleUrls: ['./create-directory.component.scss']
})
export class CreateDirectoryComponent implements OnInit {
  faWindowClose = faWindowClose;

  model = '';
  @Output() directory = new EventEmitter<string>();
  @Input() currentDirectory;
  que: string[] = [];
  errorMessage: string;

  constructor(private http: HttpClient,
              private fs: FileSystemService) { }

  ngOnInit() {
  }

  validateDirectory() {
    const matches = this.model.match(/[\w\.-]*/g);
    return matches.length === 2;
  }

  checkInputCharacter(event) {
    const str = String.fromCharCode(event.charCode);

    if (str.match(/;/)) {
      this.que.push(this.model);

      const buttonElement = document.createElement('button');
      buttonElement.setAttribute('class', 'btn btn-sm btn-light ml-1');
      buttonElement.innerText = 'x';
      buttonElement.onclick = (function(this, ev) {
        const target = ev.target as HTMLElement;
        this.removeDirectory(target.innerText);
        const element = document.getElementById(target.innerText);
        document.getElementById('directoryQue').removeChild(element);
      }).bind(this);

      const divElement = document.createElement('div');
      divElement.setAttribute('class', 'alert alert-sm alert-secondary mr-1');
      divElement.setAttribute('id', this.model);
      divElement.innerText = this.model;

      divElement.appendChild(buttonElement);
      document.getElementById('directoryQue').appendChild(divElement);

      this.model = '';
      return false;
    } else if (!str.match(/[\.a-zA-Z0-9_-]/)) {
      return false;
    }
  }

  cancelCreateDirectory() {
    this.directory.emit(null);
  }

  createDirectory() {
    if (this.model !== '') {
      this.que.push(this.model);
    }

    const directories = []; // directory objects holding name and location
    const locations = []; // locations to be created

    for (const q of this.que) {
      const object = {
        location: this.currentDirectory.location + '/' + q,
        name: q
      };

      directories.push(object);
      locations.push(object.location);
    }

    this.fs.createDirectory({
      locations
    })
      .subscribe((responceLocations: string[]) => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < responceLocations.length; i++) {
          const directory = JSON.parse(JSON.stringify(this.currentDirectory));
          directory.location = responceLocations[i];
          directory.name = directories.find((d) => {
            return d.location = responceLocations[i];
          }).name;
          this.directory.emit(directory);
        }
      }, (err) => {
        this.errorMessage = 'Some kind of error occured while creating directory.';
      });
  }

  removeDirectory(name) {
    const index = this.que.findIndex((e) => {
      return e === name;
    });

    this.que.splice(index, 1);
  }
}
