import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Welcome02PageRoutingModule } from './welcome02-routing.module';

import { Welcome02Page } from './welcome02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Welcome02PageRoutingModule
  ],
  declarations: [Welcome02Page]
})
export class Welcome02PageModule {}
