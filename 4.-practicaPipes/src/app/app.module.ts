import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localES from '@angular/common/locales/es' //idioma español
import { registerLocaleData } from '@angular/common';
import { TituloPipe } from './pipes/titulo.pipe';
import { PSuspensivosPipe } from './pipes/p-suspensivos.pipe';
registerLocaleData(localES,'es');

@NgModule({
  declarations: [
    AppComponent,
    TituloPipe,
    PSuspensivosPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, //modulo que se importa para que funcionen los otros modulos.

    
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es'
  }], //variables locales para todo el proyecto
  bootstrap: [AppComponent]
})
export class AppModule { }
