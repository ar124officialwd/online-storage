import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'api';
import * as Buffer from 'buffer';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
              private cookieSerivce: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  createSession() {
    const auth = Buffer.Buffer.from(this.model.email + ':' +
      this.model.password).toString('base64');
    this.http.get('/user', {
      headers: {
        Authorization: 'Basic ' + auth
      }
    }).subscribe((user: User) => {
      this.loginSuccess = true;
      this.cookieSerivce.set('firstName', user.firstName);
      this.cookieSerivce.set('secondName', user.secondName);
      this.cookieSerivce.set('login', user.email);
      this.cookieSerivce.set('maxStorage', String(user.pricingPlan.size));
      this.router.navigateByUrl('/user-panel');
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.loginFailed = true;
      } else {
        this.otherError = true;
      }
    });
  }
}
