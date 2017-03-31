import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public log: AuthService,
              private router: Router ) {
    if (!this.log.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.log.openMessage('qiuqiu');
  }

  logout() {
    this.log.logout();
    this.router.navigate(['login']);
  }
}
