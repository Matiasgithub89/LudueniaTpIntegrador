import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  resultado!: string;

  constructor(private fb: FormBuilder) { }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}
