import { Component } from '@angular/core';
import { Material } from './interface/material.interface';

const ELEMENT_DATA: Material[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',decimal:378.7},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',decimal:35.784},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',decimal:34.784},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',decimal:35.784},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',decimal:35.784},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',decimal:37.784},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',decimal:35.784},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',decimal:352.784},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',decimal:14.784},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',decimal:55.74},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Setear fecha en el campo fecha
  fecha:Date= new Date();
  title = 'practicaPipes';
  displayedColumns: string[] = ['demo-position', 'demo-name','demo-decimal','demo-currency' ,'demo-weight','demo-date', 'demo-symbol'];
  data = ELEMENT_DATA;
}
