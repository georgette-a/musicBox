import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome02Page } from './welcome02.page';

const routes: Routes = [
  {
    path: '',
    component: Welcome02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome02PageRoutingModule {}
