import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './pages/starwars/starwars.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuscarNombrePipe } from './pipes/buscar-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    NasaComponent,
    DetallesComponent,
    BuscarNombrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
