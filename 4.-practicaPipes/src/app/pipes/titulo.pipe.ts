import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  transform(value: any): any {
    let encabezado='Clase de filtros';
    return encabezado;
  }

}
