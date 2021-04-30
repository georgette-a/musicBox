import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import the AngularFire Module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// AngularFire Settings
export const firebaseConfig = {
  apiKey: 'AIzaSyBN4PemKw8We7nWLvSIwHv5WNAy0fvTTyQ',
  authDomain: 'musicbox-33da1.firebaseapp.com',
  projectId: 'musicbox-33da1',
  storageBucket: 'musicbox-33da1.appspot.com',
  messagingSenderId: '563422545612',
  appId: '1:563422545612:web:d412e34a3eec4b915a6469',
  measurementId: 'G-CBZY1VRRG0'
};

const routes: Routes = [
  {
    path: '',
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
    path: '',
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
    path: 'album',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
