import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../interfaces/registro.interface';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient) { }


  registro = (value: any) => {

    // console.log(value);

    const url = 'http://localhost:3000/api/registro'
    
    return this.http.post<Registro>(url, value).
    pipe(
      tap((resp) => {

        localStorage.setItem('token', resp.token);


      })
    )

    
  }
}
