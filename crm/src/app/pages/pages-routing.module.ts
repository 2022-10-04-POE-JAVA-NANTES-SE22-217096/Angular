import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent as OrdersListComponent } from './orders/list/list.component';

const routes: Routes = [
  // Page Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  // Page Orders list
  {
    path: 'orders',
    component: OrdersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
