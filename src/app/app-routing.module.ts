import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Menu1Page } from './menu-1/menu-1.page';
import { Menu2Page } from './menu-2/menu-2.page'


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-1',
    loadChildren: () => import('./menu-1/menu-1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu-2',
    loadChildren: () => import('./menu-2/menu-2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu-3',
    loadChildren: () => import('./menu-3/menu-3.module').then( m => m.Menu3PageModule)
  },
  {
    path: 'service-cart',
    loadChildren: () => import('./service-cart/service-cart.module').then( m => m.ServiceCartPageModule)
  },

  {
      path: 'menu1',
      component: Menu1Page
  },
  {
      path: 'menu2',
      component: Menu2Page
  },
  {
    path: 'waitfood',
    loadChildren: () => import('./waitfood/waitfood.module').then( m => m.WaitfoodPageModule)
  },
  {
    path: 'login-employee',
    loadChildren: () => import('../app/login-1/login-employee.module').then( m => m.LoginEmployeePageModule)
  },
  {
    path: 'day',
    loadChildren: () => import('./day/day.module').then( m => m.DayPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },
  {
    path: 'withrice',
    loadChildren: () => import('./withrice/withrice.module').then( m => m.WithricePageModule)
  },

  ];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
