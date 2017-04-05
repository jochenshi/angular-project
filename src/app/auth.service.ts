import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  msg: Boolean = false;
  text: string;

  constructor() {
  }
  login(user: string, password: string) {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('username', user);
      return true;
    }else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('username');
  }
  getUser() {
    return localStorage.getItem('username');
  }
  isLoggedIn() {
    return this.getUser() !== null;
  }
}

export const AUTH_SERVICE: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];
