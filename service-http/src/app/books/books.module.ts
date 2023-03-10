import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // TODO: Step 1.a - Module HttpClient import
import { ReactiveFormsModule } from '@angular/forms'; // TODO: Step 5.a - Module ReactiveFormsModule import
import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // TODO: Step 1.b - Module HttpClient import
    ReactiveFormsModule, // TODO: Step 5.b - Module ReactiveFormsModule import
    BooksRoutingModule
  ]
})
export class BooksModule { }
