import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderlistPage } from './orderlist.page';

const routes: Routes = [
  {
    path: '',
    component: OrderlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderlistPageRoutingModule {}
