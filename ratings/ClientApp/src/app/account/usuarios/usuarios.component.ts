import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    usuarios:UsuarioModel[];
    constructor(private usariosServices: UsuarioService) {
        usariosServices.obtenerUsuario()
            .subscribe((result: UsuarioModel[]) => {                
                this.usuarios = result;                
        }, error => console.error(error));    
    }

  ngOnInit() {
  }

}
