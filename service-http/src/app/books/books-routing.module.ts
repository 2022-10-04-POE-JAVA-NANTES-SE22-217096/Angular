import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [{

  // > site.com/livres
  // > site.com/livres/add
  // > site.com/livres/42

  // > site.com/livres/42/edit
  // > site.com/livres/42/delete
  path: 'livres',
  children: [

    // Liste des livres (Index)
    // > site.com/livres/
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
      // > site.com/livres/42
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
