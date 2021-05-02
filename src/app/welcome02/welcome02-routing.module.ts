import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome02Page } from './welcome02.page';
import { Signup01Page } from '../signup01/signup01.page';
import { LoginPage } from '../login/login.page';
const routes: Routes = [
  {
    path: '',
    component: Welcome02Page
  },
  {
    path: 'signup01',
    component: Signup01Page
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome02PageRoutingModule {}
