import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }
    public Login(usuario, pass) {        
        return this.http.get(`${environment.url_api}Account/Login?usuario=${usuario}&pass=${pass}`);
    }
    validarSesion(): any {
        return this.http.get(`${environment.url_api}Account/UsuarioAutenticado`);
    }
}
