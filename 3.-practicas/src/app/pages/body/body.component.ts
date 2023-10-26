import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //boolean para mostrar la lista de plans
  mostrar:boolean=false;

  cStarter:string="STARTER";
  cSuperPremium:string="SUPER PREMIUM";
  cUltimatePremium:string="ULTIMATE PREMIUM";
  pUno:number=0;
  pDos:number=15;
  pTres:number=30; 

  //Arreglo
  bandwhite:any[]=['250GB BandWidth','250GB BandWidth','Unlimited Bandwidth'];

  //Objeto
  detalles:any={
    caracteristicaUno:'5GB Disk Space',
    caracteristicaDos:'Suport 24/7',
  }

  //Arreglo con objetos
  columna:any=[
    {
      titulo:'STARTER',
      precio:0,
      bandwhite:'250GB BandWidth',
      caracteristicaUno:'5GB Disk Space',
      caracteristicaDos:'Suport 24/7',
    },
    {
      titulo:'SUPER PREMIUM',
      precio:15, 
      bandwhite:'250GB BandWidth',
      caracteristicaUno:'20GB Disk Space',
      caracteristicaDos:'Suport 24/7',
    },
    {
      titulo:'ULTIMATE PREMIUM',
      precio:30,
      bandwhite:'Unlimited Bandwidth',
      caracteristicaUno:'Unlimited Disk Space',
      caracteristicaDos:'Suport 24/7',
    }
  ]

  constructor() {
    console.log(this.bandwhite);
    console.log(this.detalles);
    console.log(this.columna);
    
    
    
  }

  ngOnInit(): void {
  }

}
