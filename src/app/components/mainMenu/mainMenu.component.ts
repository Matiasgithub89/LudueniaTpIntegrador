import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainMenu',
  templateUrl: './mainMenu.component.html',
  styleUrls: ['./mainMenu.component.css']
})
export class MainMenuComponent implements OnInit {
  initmenu:boolean=true;
  isLogin:boolean=true
  loginOrLogout:string;
  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    this.authService.isLogin()
    .subscribe(value=>{
      this.isLogin=value
    })
  }
  login(){
    this.authService.login()
   this.loginOrLogout="logout";
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/Catalogo-NotLogued'])

  }
  ngOnInit(): void {

  }
}
