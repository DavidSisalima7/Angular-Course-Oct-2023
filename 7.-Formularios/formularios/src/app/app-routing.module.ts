import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosbasicosComponent } from './principal/formulariosbasicos/formulariosbasicos.component';
import { FormulariosreactivosComponent } from './principal/formulariosreactivos/formulariosreactivos.component';
import { DashboardComponent } from './principal/dashboard/dashboard.component';

const routes: Routes = [
  {path:'basicos',component:FormulariosbasicosComponent},
  {path:'reactivos',component:FormulariosreactivosComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',redirectTo:'/basicos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
