import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // Default page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  // Wildcard route
  {
    path: '**',
    // component: NotFoundComponent,
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
