import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
    declarations: [UsuariosComponent , UsuarioComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
          {
              path: '',
              component: UsuariosComponent
          }, 
          {
              path: 'usuario/:id',
              component: UsuarioComponent,
              data: {
                  title: 'Usuario'                 
              }
          }
      ])
    ],
    exports: [RouterModule]
})
export class AccountModule { }
