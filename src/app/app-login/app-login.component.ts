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

  constructor(fb: FormBuilder,
              public log: AuthService,
              private route: Router) {
    if (this.log.isLoggedIn()) {
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
    this.log.login(value.username, value.password);
  }
}
