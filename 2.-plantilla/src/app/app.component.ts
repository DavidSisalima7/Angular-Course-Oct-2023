import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Sisalima';
  home:string ='Inicio';
  features:string ='Servicios';
  contact:string ='Contacto'
  cover:string ='Bienvenido'
  cover_description:string ='Si lo puedes imaginar lo puedes programar.'
  learn_more:string ='Aprender'
  footer:string ="Copyrigth 2023 | David Sisalima "
}
