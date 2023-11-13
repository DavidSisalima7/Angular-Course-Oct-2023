import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  detallesP:any=[];
 

  constructor(public datosService:DatosService,private route:ActivatedRoute) { 
    this.details();
  }


  details(){
    this.route.params.subscribe(parametros=>{
        this.datosService.cargarPersonaje(parametros['i']).subscribe(data=>{  //parametros['i'] es por el indice que mandamos como parametro
          this.detallesP=data;
          console.log(this.detallesP);
          
        })      
    })
  }

}
