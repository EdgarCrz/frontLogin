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



  public credencialesForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
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

    
    
