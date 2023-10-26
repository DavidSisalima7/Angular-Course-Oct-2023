import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Objeto para header

  header:string[]=['Pricing Example','Fuatures','Enterprise','Support','Pricing'];

  detalles:any={
    title:'Pricing',
    description:'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
