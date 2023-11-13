import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    Error404Component,
    LoginComponent
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NosotrosComponent,
    InicioComponent,
    ContactoComponent,
    Error404Component
  ],

  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule //Importado para que funcione
  ]
})
export class PagesModule { }
