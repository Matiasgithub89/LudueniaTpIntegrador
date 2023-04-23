import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    console.log("llego al ngOninit")
    this.myForm=this.fb.group({
      email:['',Validators.required,Validators.minLength(6)],
      contraseña:['',Validators.required,Validators.minLength(6)]
    })
  }
  registro():any{
    console.log("datos del form:",this.myForm.value);
  }
}
