import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu3Page } from './menu-3.page';

const routes: Routes = [
  {
    path: '',
    component: Menu3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu3PageRoutingModule {}
