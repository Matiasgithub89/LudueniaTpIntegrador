import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component:CatalogoComponent},
  {path:'Catalogo', component:CatalogoComponent},
  {path:'Catalogo-NotLogued', component:CatalogoComponent},
  {path:'Detalle', component:DetalleComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'Registro/:{producto}', component:RegistroComponent},
  {path:'Login', component:LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
