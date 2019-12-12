import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, PricingPlan } from 'api';
import * as EmailValidator from 'email-validator';
import * as Buffer from 'buffer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = new User();
  passwordRepeat = '';
  pricingPlans: PricingPlan[];
  userExist = false;

  registerSuccess = false;
  registerFailed = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/pricingplans')
      .subscribe((pricingplans: PricingPlan[]) => {
        this.pricingPlans = pricingplans;
      });
  }

  validateEmail(em) {
    return EmailValidator.validate(em);
  }

  validatePasswords() {
    return this.passwordRepeat === this.model.password;
  }

  save() {
    this.registerFailed = false;
    this.registerSuccess = false;

    const auth = 'Basic ' + Buffer.Buffer.from(this.model.email).toString('base64');

    this.http.get('/user', {
      headers: {
        Authorization: auth
      }
    }).subscribe((responce: User) => {
      this.userExist = responce.email === this.model.email;

      if (this.userExist) {
        const offsetTop = document.getElementById('email').offsetTop;
        document.getElementById('register').scrollTop = offsetTop;
        return;
      }
    }, (err) => {
      this.http.post('/user', this.model)
        .subscribe((user: User) => {
          this.registerSuccess = true;
          const offsetTop = document.getElementById('success').offsetTop;
          document.getElementById('register').scrollTop = offsetTop;
        }, (err: HttpErrorResponse) => {
          this.registerFailed = true;
          const offsetTop = document.getElementById('failed').offsetTop;
          document.getElementById('register').scrollTop = offsetTop;
        });
    });
  }
}
