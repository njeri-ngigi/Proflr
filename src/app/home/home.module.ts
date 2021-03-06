import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    WelcomeComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
