import { Component, OnInit } from '@angular/core';

import {HtmlOutlet} from '../../htmloutlet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public value: string;

  constructor() { }

  ngOnInit() {
  }
  clickEve() {
    this.value = `<div>this is just for test</div>`;
  }
  reset() {
    this.value = `<div>changed</div>`;
  }

}
