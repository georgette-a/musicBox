import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Welcome01Page } from './welcome01.page';

const routes: Routes = [
  {
    path: '',
    component: Welcome01Page
  },
  {
    path: 'welcome02',
    loadChildren: () => import('../welcome02/welcome02.module').then( m => m.Welcome02PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Welcome01PageRoutingModule {}
