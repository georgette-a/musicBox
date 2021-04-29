import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup02Page } from './signup02.page';

const routes: Routes = [
  {
    path: '',
    component: Signup02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup02PageRoutingModule {}
