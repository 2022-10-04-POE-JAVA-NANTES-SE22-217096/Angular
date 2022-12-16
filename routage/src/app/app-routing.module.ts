import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComposantAComponent as PageA } from './module-a/composant-a/composant-a.component';
import { ComposantBComponent as PageB } from './module-a/composant-b/composant-b.component';
import { ComposantAComponent as PageC } from './module-b/composant-a/composant-a.component';
import { ComposantBComponent as PageD } from './module-b/composant-b/composant-b.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  // Page A > Module A Component A
  // site.com/page-a
  {
    path: "page-a",
    component: PageA,
  },

  // Page B > Module A Component B
  // site.com/page-b
  {
    path: "page-b",
    component: PageB,
  },

  // Page C > Module B Component A
  // site.com/page-c
  {
    path: "page-c",
    component: PageC
  },

  // Page D > Module B Component B
  // site.com/page-d
  {
    path: "page-d",
    component: PageD
  },


  // Default Page
  // site.com/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a'
  },

  // Not Found Page
  // Wildcard route
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
