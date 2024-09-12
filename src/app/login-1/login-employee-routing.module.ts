import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmployeePage } from './login-employee.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmployeePageRoutingModule {}
