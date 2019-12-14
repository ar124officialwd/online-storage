import { CwdService } from './../cwd.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ExtendedDirectory } from './../extended-directory';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileSystemService } from '../file-system.service';
import { stopEventPropagation } from '../stopEventPropagation';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  @Input() directory: ExtendedDirectory;

  faTrash = faTrash;

  stopEventPropagation = stopEventPropagation;

  constructor(private fs: FileSystemService,
              private cwdService: CwdService) { }

  ngOnInit() {
  }

  openDirectory() {
    this.cwdService.openDirectory(this.directory);
  }

  deleteDirectory() {
    this.fs.deleteEntries([this.directory.location + ':' + 'directory'])
      .subscribe((res => {
        this.cwdService.removeEntries([this.directory]);
      }));
  }
}
