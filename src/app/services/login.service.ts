import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  entrar = (value: any) => {

    // console.log(value);

    const url = 'http://localhost:3000/api/inicio'
    
    return this.http.post<{ok:boolean, msg: string }>(url, value);
    
  }
}
