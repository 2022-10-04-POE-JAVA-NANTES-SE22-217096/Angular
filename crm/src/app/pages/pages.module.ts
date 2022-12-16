import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './orders/list/list.component';
import { AddComponent } from './orders/add/add.component';
import { EditComponent } from './orders/edit/edit.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
