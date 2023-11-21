import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariosbasicos',
  templateUrl: './formulariosbasicos.component.html',

})
export class FormulariosbasicosComponent {

  user:string='';
  password:string='';

  enviar(formulario:NgForm){
    console.log(this.user,this.password); 
    
  }
}
