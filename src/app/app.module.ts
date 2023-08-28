import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormRegistrarComponent } from './form-registrar/form-registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import { DashinvitadoComponent } from './dashinvitado/dashinvitado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    DashboardComponent,
    FormRegistrarComponent,
    DashadminComponent,
    DashinvitadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
