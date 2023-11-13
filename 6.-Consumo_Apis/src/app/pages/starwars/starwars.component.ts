import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {

  data: any[]=[];
   //VARIABLE PARA ALMACENAR EL NOMBRE QUE SE INGRESA EN EL BUSCADOR 
   filtroP='';

  constructor(public datosService: DatosService) {
    this.datosRickAndMorty();
  }

  datosRickAndMorty() {
    this.datosService.datosRickAndMorty().subscribe(response => {
      this.data = response.results;
      console.log(this.data);

    })
  }


}
