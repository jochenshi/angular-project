/**
 * Created by Jincheng on 2017/3/29.
 */
import {Routes} from '@angular/router';

import {AppLoginComponent} from './app-login/app-login.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapComponent} from './map/map.component';

const childRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent}
];

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AppLoginComponent},
  {path: 'menu', component: MenuComponent, children: childRoutes},
  /*{path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent}*/
];
