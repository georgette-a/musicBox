import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup01PageRoutingModule } from './signup01-routing.module';

import { Signup01Page } from './signup01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup01PageRoutingModule
  ],
  declarations: [Signup01Page]
})
export class Signup01PageModule {}
