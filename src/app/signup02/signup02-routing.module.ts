import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup02Page } from './signup02.page';
import { TabsPage } from './../tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: Signup02Page
  },
  {
    path: 'tabs',
    component: TabsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup02PageRoutingModule {}
