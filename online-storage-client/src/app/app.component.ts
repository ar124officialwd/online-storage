import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online-storage-client';

  constructor(private cookieSerivce: CookieService,
              private router: Router) {

  }

  ngOnInit() {
    if (this.cookieSerivce.get('login')) {
      this.router.navigateByUrl('/user-panel');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
