import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
