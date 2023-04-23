import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(localStorage.getItem("login")?true:false)
  constructor() {  }

  login(){
    // this.http.post("url",{
    //   usuario:"",
    //   password:""
    // }).subscribe(token=>{
    //   localStorage.setItem("token",token.toString())
    // })
    this.authenticationState.next(true)
    localStorage.setItem("login","true")
    console.log("llego al servicio ")
  }
  logout(){
    this.authenticationState.next(false)
    // localStorage.removeItem("login")
  }
  isLogin(){
    console.log("is login en el service:",this.authenticationState)
    return this.authenticationState
  }
  isLoginValue(){
    return this.authenticationState.value
  }
}
