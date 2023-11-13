import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'auth', loadChildren:()=>import ('./pages/pages.module').then(m =>m.PagesModule)},  //Lazy Load (Carga perezosa)
  {path:'nosotros',component:NosotrosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'cuenta',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}, //ruta por defecto para iniciar proyecto
  {path:'**',component:Error404Component}, //error de ruta
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
