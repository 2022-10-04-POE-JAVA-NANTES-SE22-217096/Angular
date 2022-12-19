import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';

// const routes: Routes = [
//   // Liste des livres
//   // > site.com/livres
//   {
//     path: 'livres',
//     component: ListComponent
//   },

//   // Affiche un livre
//   // > site.com/livres/42
//   // > site.com#page=livres&id=42
//   {
//     path: 'livres/:id',
//     component: ShowComponent
//   }

// ];


const routes: Routes = [{

  // > site.com/livres/add
  // > site.com/livres/42
  // > site.com/livres
  // > site.com/livres/edit/42
  path: 'livres',
  children: [

    // Liste des livres (Index)
    // > site.com/livres
    {
      path: '',
      component: ListComponent
    },

    // Ajoute un livre (Create)
    // > site.com/livres/add
    {
      path: 'add',
      component: AddComponent
    },

    {
      path: ':id',
      // component: ShowComponent
      children: [

        // Affiche un livre (Read)
        // > site.com/livres/42
        {
          path: '',
          component: ShowComponent
        },

        // Modifier un livre (Update)
        // > site.com/livres/42/edit
        {
          path: 'edit',
          component: EditComponent
        },

        // Supprimer un livre (Delete)
        // > site.com/livres/42/delete
        // {
        //   path: 'delete',
        //   component: DeleteComponent
        // }
      ]
    },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
