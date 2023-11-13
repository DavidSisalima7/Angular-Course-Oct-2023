import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Detalles } from '../Interfaces/detalles.iterface';
import {map} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public menu:any =[
    {
      titulo:'STAR WARS',
      icono:'metismenu-icon pe-7s-star',
      subtitulo: 'Datos Star Wars',
      url:'starwars'
    },
    { 
      titulo:'STAR NASA',
      icono:'metismenu-icon pe-7s-rocket',
      subtitulo: 'Datos Nasa',
      url:'nasa'
    }
  ];

  //url API RICK AND MORTY
  url:string='https://rickandmortyapi.com/api/character'

  //url API NASA
  urlNasa:string='https://api.nasa.gov/planetary/apod?api_key='
  apiKey:string='MGrltTDMJN0UEaAGktsuFF5siLgmcBmG6m1VjSh8'

  constructor(private http:HttpClient) { }
  
  datosRickAndMorty(){
    return  this.http.get<any>(`${this.url}`);
  }

  cargarPersonaje(id:any){
    return this.http.get<Detalles>(`https://rickandmortyapi.com/api/character/${id}`)
    .pipe(
      map(response=>{
        return response;
      })
    )
  }

  //EndPoint Nasa
  datosNasa(){
    return this.http.get<any>(`${this.urlNasa}${this.apiKey}`);
  }


}
