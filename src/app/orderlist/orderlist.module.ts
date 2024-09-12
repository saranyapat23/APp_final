import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderlistPageRoutingModule } from './orderlist-routing.module';

import { OrderlistPage } from './orderlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderlistPageRoutingModule
  ],
  declarations: [OrderlistPage]
})
export class OrderlistPageModule {}
