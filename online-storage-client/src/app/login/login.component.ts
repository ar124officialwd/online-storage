import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'api';
import * as Buffer from 'buffer';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CwdService } from '../cwd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new User();
  loginSuccess = false;
  loginFailed = false;
  otherError = false;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router,
              private cwdService: CwdService) { }

  ngOnInit() {
    if (this.cookieService.get('login')) {
      this.router.navigateByUrl('/user-panel');
    }
  }

  createSession() {
    const auth = Buffer.Buffer.from(this.model.email + ':' +
      this.model.password).toString('base64');
    this.http.get('/user', {
      headers: {
        Authorization: 'Basic ' + auth
      }
    }).subscribe((user: User) => {
      // set up cookies for remembering user
      this.loginSuccess = true;
      this.cookieService.set('firstName', user.firstName);
      this.cookieService.set('secondName', user.secondName);
      this.cookieService.set('login', user.email);
      this.cookieService.set('maxStorage', String(user.pricingPlan.size));

      // fetch entries from filesystem at server

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.loginFailed = true;
      } else {
        this.otherError = true;
      }
    }, () => {
      this.router.navigateByUrl('/user-panel');
    });
  }
}
