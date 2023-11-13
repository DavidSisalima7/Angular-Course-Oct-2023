import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {

  transform(value: any, args:any): any {
    const nombreP = [];
    for(const recorrido of value){
      if (recorrido.name.toLowerCase().indexOf(args.toLowerCase())>-1) { //transforma el nombre en minusculas
        nombreP.push(recorrido);
      }
    }
    return nombreP;
  }

}
