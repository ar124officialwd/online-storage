import { ExtendedDirectoryContents } from './../extended-directory-contents';
import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Directory } from 'api';
import { HttpClient } from '@angular/common/http';
import { faInfo, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { join } from 'path';
import { ExtendedDirectory } from '../extended-directory';

@Component({
  selector: 'app-create-directory',
  templateUrl: './create-directory.component.html',
  styleUrls: ['./create-directory.component.scss']
})
export class CreateDirectoryComponent implements OnInit {
  faWindowClose = faWindowClose;
  faInfo = faInfo;

  model = '';
  @Output() directory = new EventEmitter<ExtendedDirectory>();
  @Input() currentDirectory;
  @Input() existingNames;
  help = false;
  que: string[] = [];
  errorMessage: string;

  constructor(private http: HttpClient,
              private fs: FileSystemService) { }

  ngOnInit() {
  }

  addDirectory() {
    const index = this.existingNames.findIndex(e => {
      return e.name === this.model;
    });

    if (index > 0) {
      this.errorMessage = 'A file or directory exist in current direcory' +
        ' with same name as you choosen. Please use another name.';
      return;
    }

    this.errorMessage = '';
    this.que.push(this.model);

    const divElement = document.createElement('div');
    const buttonElement = document.createElement('button');

    buttonElement.setAttribute('class', 'btn btn-sm btn-secondary ml-1');
    buttonElement.setAttribute('directoryName', this.model);
    buttonElement.innerText = 'x';
    buttonElement.onclick = ((event) => {
      const target = event.target as HTMLElement;
      document.getElementById('directoryQue').removeChild(target.parentElement);

      const index = this.que.findIndex(i => {
        return i === target.getAttribute('directoryName');
      });

      this.que.splice(index, 1);
    }).bind(this);

    divElement.setAttribute('class', 'alert alert-sm alert-light mr-1');
    divElement.innerText = this.model;
    divElement.appendChild(buttonElement);
    document.getElementById('directoryQue').appendChild(divElement);

    this.model = '';
  }

  checkInputCharacter(event) {
    const str = String.fromCharCode(event.charCode);
    if (!str.match(/[\.a-zA-Z0-9_-]/)) {
      return false;
    }
  }

  closeModel() {
    this.directory.emit(null);
  }

  createDirectories() {
    const directories = []; // directory objects holding name and location
    const locations = []; // locations to be created

    for (const q of this.que) {
      const object = {
        location: this.currentDirectory.location === '/' ?
          this.currentDirectory.location + q :
          this.currentDirectory.location + '/' + q,
        name: q
      };

      directories.push(object);
      locations.push(object.location);
    }

    this.fs.createDirectory({
      locations
    }).subscribe((responceLocations: string[]) => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < responceLocations.length; i++) {
        const newDirectory: ExtendedDirectory = new ExtendedDirectory();

        newDirectory.location = responceLocations[i];
        newDirectory.name = directories.find((d) => {
          return d.location === responceLocations[i];
        }).name;
        newDirectory.size = 4096;
        newDirectory.files = 0;
        newDirectory.subDirectories = 0;
        newDirectory.contents = {
          files: [],
          directories: []
        };

        this.directory.emit(newDirectory);
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

  toggleHelp() {
    if (this.help) {
      this.help = false;
    } else {
      this.help = true;
    }
  }
}
