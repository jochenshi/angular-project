import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  myForm: FormGroup;
  message: string;

  constructor(fb: FormBuilder,
              public logservice: AuthService,
              private route: Router) {
    if (this.logservice.isLoggedIn()) {
      this.route.navigate(['menu']);
    }
    this.myForm = fb.group({
      'username': [],
      'password': []
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log('you submit value', value);
    if (!this.logservice.login(value.username, value.password)) {
      this.message = 'Incorrect username or password!';
      setTimeout( () => {
        this.message = '';
      }, 2500);
    }
    // this.logservice.login(value.username, value.password);
    if (this.logservice.isLoggedIn()) {
      this.route.navigate(['menu']);
    }
  }
}
