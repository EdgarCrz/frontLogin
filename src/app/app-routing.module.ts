import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { GuardInicioGuard } from './guards/guard-inicio.guard';

const routes: Routes = [

{path: '', component: RegistroComponent},
{ path: 'login' ,component: LoginComponent},
{ path: 'inicio' ,component: InicioComponent, canActivate:[GuardInicioGuard]},
{ path: '**' , redirectTo: ''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
