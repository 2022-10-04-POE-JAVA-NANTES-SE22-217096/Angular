import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantAComponent } from './composant-a/composant-a.component';
import { ComposantBComponent } from './composant-b/composant-b.component';



@NgModule({
  declarations: [
    ComposantAComponent,
    ComposantBComponent
  ],
  imports: [
    CommonModule
  ],
  // exports: [
  //   ComposantAComponent,
  //   ComposantBComponent
  // ]
})
export class ModuleAModule { }
