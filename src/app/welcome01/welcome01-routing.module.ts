import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome01Page } from './welcome01.page';
import { Welcome02Page } from '../welcome02/welcome02.page';

const routes: Routes = [
  {
    path: '',
    component: Welcome01Page
  },
  {
    path: 'welcome02',
    component: Welcome02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome01PageRoutingModule {}
