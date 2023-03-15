import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    obtenerUsuario() {
        return this.http.get(`${environment.url_api}Account/Usuarios`);
    }
}
