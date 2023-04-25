import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  formularioContacto:FormGroup
  resultado!: string;
  productoConsultado:string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) {
      this.formularioContacto = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(10)]],
        mail: ['', [Validators.required, Validators.email]],
        mensaje: ['', [Validators.required, Validators.maxLength(500)]]
      });

      //Trabajo el caso donde se llega a esta vista atravez del boton de consulta del catalogo
    if(this.route.snapshot.url.length>1){
      this.productoConsultado=this.route.snapshot.url[1].path
      this.formularioContacto.controls['mensaje'].setValue(`Me interesa el producto ${this.productoConsultado} ¿podrian enviarme información?`)

    }
   }



  submit() {
    if (this.formularioContacto.valid)
      this.resultado = `Todos los datos son válidos `;

    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}
