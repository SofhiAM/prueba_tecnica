import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormRegistrarComponent } from './form-registrar/form-registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    DashboardComponent,
    FormRegistrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
