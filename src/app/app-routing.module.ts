import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

{path: '', component: RegistroComponent},
{ path: 'login' ,component: LoginComponent},
{ path: 'inicio' ,component: InicioComponent},
{ path: '**' , redirectTo: ''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
