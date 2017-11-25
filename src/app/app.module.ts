import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { HorsesListComponent } from './components/horses-list/horses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HorsesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
