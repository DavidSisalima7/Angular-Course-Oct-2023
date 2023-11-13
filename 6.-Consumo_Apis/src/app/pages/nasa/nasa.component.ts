import { Component } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent {

  nasaP:any=[];
  constructor(private datosService:DatosService) { 
    this.datosNasa();
  }

  datosNasa(){
    this.datosService.datosNasa().subscribe(data=>{
      this.nasaP=data;
    })
  }

}
