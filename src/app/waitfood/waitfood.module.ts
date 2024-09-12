import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitfoodPageRoutingModule } from './waitfood-routing.module';

import { WaitfoodPage } from './waitfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitfoodPageRoutingModule
  ],
  declarations: [WaitfoodPage]
})
export class WaitfoodPageModule {}
