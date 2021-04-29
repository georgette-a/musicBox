import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome01Page } from './welcome01.page';

const routes: Routes = [
  {
    path: '',
    component: Welcome01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome01PageRoutingModule {}
