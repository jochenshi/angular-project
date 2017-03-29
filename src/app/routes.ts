/**
 * Created by Jincheng on 2017/3/29.
 */
import {Routes} from '@angular/router';

import {AppLoginComponent} from './app-login/app-login.component';
import {MenuComponent} from './menu/menu.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AppLoginComponent},
  {path: 'menu', component: MenuComponent}
];
