import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'ciclos';

  mostrar:boolean=true;

  constructor(){
    console.log("Estoy en el constructor");
    
  }
 
  ngOnInit(): void {
    console.log("Estoy en el ngOnInit");
    
  }

  ngDoCheck(): void {
    console.log("DoCheck ejecutado");
    
  }

  cambiar(){
    this.title='Mostrar cambio de DoCheck';
  }

  

  ocultar(value:boolean){
    this.mostrar=value;
  }
}
