import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup02PageRoutingModule } from './signup02-routing.module';

import { Signup02Page } from './signup02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup02PageRoutingModule
  ],
  declarations: [Signup02Page]
})
export class Signup02PageModule {}
