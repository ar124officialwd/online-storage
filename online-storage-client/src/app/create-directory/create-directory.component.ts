import { Router } from '@angular/router';
import { CwdService } from './../cwd.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faInfo, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FileSystemService } from '../file-system.service';
import { ExtendedDirectory } from '../extended-directory';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { Sidebar } from '../sidebar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-directory',
  templateUrl: './create-directory.component.html',
  styleUrls: ['./create-directory.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('void => *', [
        animate('5s ease-in')
      ]),
      transition('* => void', [
        style({transform: 'translateX(100%)'}),
        animate(100)
      ])
    ])
  ]
})
export class CreateDirectoryComponent extends Sidebar implements OnInit {
  faWindowClose = faWindowClose;
  faInfo = faInfo;

  model = '';
  existingNames = [];
  cwd = null;
  que: string[] = [];
  errorMessage: string;

  constructor(router: Router,
              private fs: FileSystemService,
              private cwdService: CwdService) {
                super(router);
                this.existingNames = this.cwdService.getNames();
                this.cwd = this.cwdService.getCwd();
              }

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

      const innerIndex = this.que.findIndex(i => {
        return i === target.getAttribute('directoryName');
      });

      this.que.splice(innerIndex, 1);
    }).bind(this);

    divElement.setAttribute('class', 'alert alert-sm alert-light mr-1');
    divElement.innerText = this.model;
    divElement.appendChild(buttonElement);
    document.getElementById('directoryQue').appendChild(divElement);

    this.model = '';
  }

  /* check user input against allowed characters */
  checkInputCharacter(event) {
    const str = String.fromCharCode(event.charCode);
    if (!str.match(/[\.a-zA-Z0-9_-]/)) {
      return false;
    }
  }

  /* create name directories */
  createDirectories() {
    const directories = []; // directory objects holding name and location
    const locations = []; // locations to be created

    for (const q of this.que) {
      const object = {
        location: this.cwd.location === '/' ?
          this.cwd.location + q :
          this.cwd.location + '/' + q,
        name: q
      };

      directories.push(object);
      locations.push(object.location);
    }

    const createdDirectories = [];
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

        createdDirectories.push(newDirectory);
      }
    }, (err) => {
      this.errorMessage = 'Some kind of error occured while creating directory.';
    }, () => {
      this.cwdService.pushToDirectories(createdDirectories);
      this.closeModel();
    });
  }

  openHelp() {

  }
}
