import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { HorsesListComponent } from './components/horses-list/horses-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatListModule, MatIconModule, MatRippleModule, MatCardModule } from '@angular/material';
import { HorseService } from '../app/services/horse.service'
import {MatInputModule} from '@angular/material/input';


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
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [HorseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
