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
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    MapComponent
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
