import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup01Page } from './signup01.page';

const routes: Routes = [
  {
    path: '',
    component: Signup01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup01PageRoutingModule {}
