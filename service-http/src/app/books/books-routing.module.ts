import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // Liste des livres
  {
    path: 'livres',
    component: ListComponent
  },

  // Ajouter un livre
  {
    path: 'livres/add',
    component: AddComponent
  },

  // Modifier un livre
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
