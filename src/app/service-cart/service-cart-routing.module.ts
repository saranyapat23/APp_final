import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCartPage } from './service-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceCartPageRoutingModule {}
