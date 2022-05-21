import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardInicioGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.loginService.validarToken().pipe(
      tap((estaAutenticado: any) => {
        
        if (!estaAutenticado) {
          this.router.navigateByUrl('/login');
        }
      })
    )
  }
  
}
