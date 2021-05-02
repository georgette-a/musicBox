import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome02Page } from './welcome02.page';

const routes: Routes = [
  {
    path: '',
    component: Welcome02Page
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome02PageRoutingModule {}
