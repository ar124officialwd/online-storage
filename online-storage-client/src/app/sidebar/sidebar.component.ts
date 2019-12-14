import { Router, ActivatedRoute } from '@angular/router';
import { faInfo, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faInfo = faInfo;
  faWindowClose = faWindowClose;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeModel() {
    this.router.navigate([{ outlets: {sidebar: null} }])
  }

  toggleHelp() {

  }
}
