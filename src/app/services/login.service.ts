import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem('token') || ''; //para evitar estar haciendo esto cada que necesitemos el token del localstorage
  }


  entrar = (value: any) => {

    // console.log(value);

    // const url = 'http://localhost:3000/api/inicio'
    const url = `${base_url}/inicio`;
    
    return this.http.post<{ok:boolean, msg: string, token:string }>(url, value).
    pipe(
      tap((resp) => {

        localStorage.setItem('token', resp.token);


      })
    )
    
  
  }
  

  validarToken():Observable<boolean>{

    // const url = 'http://localhost:3000/api/inicio'
    const url = `${base_url}/inicio`;

    
    return this.http.get<{ok:boolean, msg: string }>(url,{headers:{'x-token': this.token}}).
    pipe(
      map((resp: any)=>{

        return true
      }),
      catchError((err) => of(false))
    )

  }
}
