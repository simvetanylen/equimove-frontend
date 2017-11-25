import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { HorsesListComponent } from './components/horses-list/horses-list.component';
// import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'horses-list', component: HorsesListComponent },
  {
    path: '',
    redirectTo: '/horses-list',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HorsesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
