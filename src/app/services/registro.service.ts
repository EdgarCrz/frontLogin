import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../interfaces/registro.interface';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient) { }


  registro = (value: any) => {

    // console.log(value);

    const url = `${base_url}/registro`
    
    return this.http.post<Registro>(url, value).
    pipe(
      tap((resp) => {

        localStorage.setItem('token', resp.token);


      })
    )

    
  }
}
