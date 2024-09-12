import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmployeePageRoutingModule } from './login-employee-routing.module';

import { LoginEmployeePage } from './login-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmployeePageRoutingModule
  ],
  declarations: [LoginEmployeePage]
})
export class LoginEmployeePageModule {}
