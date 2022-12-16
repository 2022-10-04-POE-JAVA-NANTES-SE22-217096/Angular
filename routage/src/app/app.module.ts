import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ModuleAModule } from './module-a/module-a.module';
// import { ModuleBModule } from './module-b/module-b.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ModuleAModule,
    // ModuleBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
