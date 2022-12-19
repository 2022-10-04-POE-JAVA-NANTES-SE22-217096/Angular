import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // Liste des auteurs 
  {
    path: 'auteurs',
    component: ListComponent
  },

  // Ajouter un auteur
  {
    path: 'auteurs/add',
    component: AddComponent
  },
  
  // Modifier un auteur
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
