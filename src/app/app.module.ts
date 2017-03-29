import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { MenuComponent } from './menu/menu.component';

import {AUTH_SERVICE} from './auth.service';
import {RouterModule} from '@angular/router';

import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_SERVICE,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
