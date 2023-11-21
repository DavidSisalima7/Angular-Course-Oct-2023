import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulariosreactivos',
  templateUrl: './formulariosreactivos.component.html',
})
export class FormulariosreactivosComponent {

  formulario=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required])
  })

  constructor(private router: Router){

  }

  enviar(){
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched(); // si no a sido seleccionado saldra error
      return;
    }
    this.router.navigateByUrl('/dashboard');
    console.log(this.formulario);
    
  }

}
