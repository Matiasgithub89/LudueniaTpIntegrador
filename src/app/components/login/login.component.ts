import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  resultado!: string;
  myForm:FormGroup;
  constructor(
    private authService:AuthService,
    public fb:FormBuilder
  ) { }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    pass: ['', [Validators.required, Validators.minLength(6)]]
  });
  login(){
    this.authService.login();
    console.log("Usted se logueo")
  }

  submit() {
    if (this.formularioContacto.valid){
      this.resultado = "Todos los datos son válidos-Usted Esta logueado";
      this.authService.login();
      console.log("Usted se logueo")
    }else{
      this.resultado = "Hay datos inválidos en el formulario";}
  }

}
