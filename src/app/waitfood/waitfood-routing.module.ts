import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitfoodPage } from './waitfood.page';

const routes: Routes = [
  {
    path: '',
    component: WaitfoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitfoodPageRoutingModule {}
