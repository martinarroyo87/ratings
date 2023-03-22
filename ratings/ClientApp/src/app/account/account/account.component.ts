import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    accountFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder, private serverAccout: AccountService, private router: Router) {
        this.accountFormGroup = this.formBuilder.group(
            {
                usuario: ['', Validators.required],
                password: ['', Validators.required]
            }
        );
    }

  ngOnInit() {
  }

    // Valida si el campo es inválido
    campoInvalido(campo: string) {
        return this.accountFormGroup.get(campo).invalid && this.accountFormGroup.get(campo).touched;
    }
    // Valida si el campo es válido
    campoValido(campo: string) {
        return this.accountFormGroup.get(campo).valid && this.accountFormGroup.get(campo).touched;
    }
    autenticar(event: Event) {
        this.serverAccout.Login(this.accountFormGroup.value.usuario, this.accountFormGroup.value.password).subscribe(
            (res: any) => {
                console.log(res);
                if (res.exito) {
                     Swal.fire({
                        title: 'RATING',
                        text: 'Bienvenido a Ratingapp',
                        icon: 'info',
                         allowOutsideClick: () => true,  
                        
                     }
                     ).then(function () {
                         this.router.navigate(['./']);
                     });
                    
                } else {
                    Swal.fire({
                        title: 'RATING',
                        text: 'Usuario o contraseña incorrectos.',
                        icon: 'error',
                    }
                    );
                }
            }
        );
    }
}
