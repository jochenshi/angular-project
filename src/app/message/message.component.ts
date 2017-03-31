import {ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  text: string;
  constructor(public auth: AuthService) {
    this.text = auth.text;
  }

  ngOnInit() {
  }

}
