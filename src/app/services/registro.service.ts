import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient) { }


  registro = (value: any) => {

    // console.log(value);

    const url = 'http://localhost:3000/api/registro'
    
    return this.http.post<{ok:boolean, msg: string, email:string, password:string }>(url, value);
    
  }
}
