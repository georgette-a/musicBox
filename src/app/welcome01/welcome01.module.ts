import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Welcome01PageRoutingModule } from './welcome01-routing.module';

import { Welcome01Page } from './welcome01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Welcome01PageRoutingModule
  ],
  declarations: [Welcome01Page]
})
export class Welcome01PageModule {}
