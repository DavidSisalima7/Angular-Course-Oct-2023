import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { FormulariosbasicosComponent } from './formulariosbasicos/formulariosbasicos.component';
import { FormulariosreactivosComponent } from './formulariosreactivos/formulariosreactivos.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeModule } from '../modulosprime/prime.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'



@NgModule({
  declarations: [
    PrincipalComponent,
    FormulariosbasicosComponent,
    FormulariosreactivosComponent,
    MenuComponent,
    DashboardComponent,
  ],
  exports:[
    MenuComponent  //para que el menú se haga estatico en todas las navegaciones.
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule, //formularios reactivos
  ]
})
export class PrincipalModule { }
