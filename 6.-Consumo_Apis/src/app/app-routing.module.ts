import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './pages/starwars/starwars.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  {path:'starwars',component:StarwarsComponent},
  {path:'nasa',component:NasaComponent},
  {path:'starwars/detalles/:i',component:DetallesComponent},
  {path:'**',redirectTo:'/starwars',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
