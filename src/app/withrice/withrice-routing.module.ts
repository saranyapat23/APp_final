import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithricePage } from './withrice.page';

const routes: Routes = [
  {
    path: '',
    component: WithricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithricePageRoutingModule {}
