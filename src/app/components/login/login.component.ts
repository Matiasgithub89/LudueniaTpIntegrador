import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(
    private authService:AuthService,
    public fb:FormBuilder
  ) { }
  login(){
    this.authService.login();
    console.log("Usted se logueo")
  }
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
