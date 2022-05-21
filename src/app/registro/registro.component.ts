import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  checked: boolean = false;
  verContrasena: string = 'password';

  public registroForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router) {

  }

  ngOnInit(): void {
    // this.registro();
  }
  mostrarContrasena(value:boolean){
    value === true ? this.verContrasena =  '' : this.verContrasena = 'password';
  }


  registro() {


    if (this.registroForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Debe ingresar todos los campos',
        icon: 'warning',
        timer: 1200
      });
    } else {


      this.registroService.registro(this.registroForm.value).subscribe((resp) => {

        const { msg, email, password, ok } = resp;
        console.log(resp);


        // TODO: VERIFICAR FUNCIONAMIENDO
        // TODO: AGREGAR ERROR DE USUARIO NO ENCONTRADO
        if (ok == true) {
          Swal.fire({
            title: 'Registro exitoso',
            icon: 'success',
            timer: 1200,
            showCancelButton: false,
            showConfirmButton: false
          });

          setTimeout(() => {

            this.router.navigateByUrl('/login');
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


    // this.router.navigateByUrl('/');



  }

}
