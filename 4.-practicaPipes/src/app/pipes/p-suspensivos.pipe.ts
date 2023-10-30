import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pSuspensivos'
})
export class PSuspensivosPipe implements PipeTransform {

  //En caso de que sobrepase las 6 letras se ponen puntos suspensivos. 
  transform(value: string): string {
    if(value.toString().length>6){
      value=value.substring(0,6);
      value+='....'
    }
    return value;
  }

}
