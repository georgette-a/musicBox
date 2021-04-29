import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome01',
    loadChildren: () => import('./welcome01/welcome01.module').then( m => m.Welcome01PageModule)
  },
  {
    path: 'welcome02',
    loadChildren: () => import('./welcome02/welcome02.module').then( m => m.Welcome02PageModule)
  },
  {
    path: 'signup01',
    loadChildren: () => import('./signup01/signup01.module').then( m => m.Signup01PageModule)
  },
  {
    path: 'signup02',
    loadChildren: () => import('./signup02/signup02.module').then( m => m.Signup02PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
