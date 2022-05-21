import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked: boolean = false;
  verContrasena: string = 'password';

  public credencialesForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    recordar:[false]
  })

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  mostrarContrasena(value:boolean){
    value === true ? this.verContrasena =  '' : this.verContrasena = 'password';
  }

  entrar(){
    // console.log("bienvenido");
    // console.log(this.credencialesForm.value);

    this.loginService.entrar(this.credencialesForm.value).subscribe((resp)=>{
      console.log(resp);
      


      const { msg, ok } = resp;
      console.log(resp);
      
  
      // TODO: VERIFICAR FUNCIONAMIENDO
      // TODO: AGREGAR ERROR DE USUARIO NO ENCONTRADO
      if (ok == true) {
        Swal.fire({
          title: 'Hola',
          text: msg,
          icon: 'success',
          timer: 1200,
          showCancelButton: false,
          showConfirmButton: false
        });
        
        setTimeout(() => {
          
          this.router.navigateByUrl('/inicio');
          if (this.credencialesForm.get('recordar')?.value) {
            localStorage.setItem('loginName', this.credencialesForm.get('email')?.value)
          } else {
            localStorage.removeItem('loginName');
          }
        }, 1200);
      }
    }, (err) => {
      Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'warning',
          timer: 1200,
          showCancelButton: false,
          showConfirmButton: false
      });
      console.log(err.error.msg);
  
    })


    }

  }

    
    
