import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent as OrdersListComponent } from './orders/list/list.component';

const routes: Routes = [
  // Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  // Orders List
  {
    path: 'orders',
    component: OrdersListComponent
  },

  // Orders Add

  // Orders Edit
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
