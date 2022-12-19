import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default route
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // Wildcard Route / Not Found
  {
    path: '**',
    // Lazy Loading Module route
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
