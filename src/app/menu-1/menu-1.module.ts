import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu1PageRoutingModule } from './menu-1-routing.module';

import { Menu1Page } from './menu-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu1PageRoutingModule
  ],
  declarations: [Menu1Page]
})
export class Menu1PageModule {}
