import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithricePageRoutingModule } from './withrice-routing.module';

import { WithricePage } from './withrice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithricePageRoutingModule
  ],
  declarations: [WithricePage]
})
export class WithricePageModule {}
