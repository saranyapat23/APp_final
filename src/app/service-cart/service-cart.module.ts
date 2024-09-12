import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceCartPageRoutingModule } from './service-cart-routing.module';

import { ServiceCartPage } from './service-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceCartPageRoutingModule
  ],
  declarations: [ServiceCartPage]
})
export class ServiceCartPageModule {}
