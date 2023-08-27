import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistrarComponent } from './form-registrar/form-registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {path:'registrar', component:FormRegistrarComponent},
  {path:'inicio', component:DashboardComponent},
  {path:'iniciar-sesion', component:FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
