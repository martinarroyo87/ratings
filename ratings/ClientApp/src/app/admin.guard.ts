import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(
        private accountService: AccountService,
        private router: Router
    ) {

    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*if (this.accountService.estaAutenticado()) {*/
          this.accountService.validarSesion().subscribe(resp => {
              if (resp.autenticado === true) {
                  return true;
              }
              else {
                  this.router.navigate(['/account']);
                  return false;
              }
          }
          );
          return true;
      //}
      //else {
      //    this.router.navigate(['/account']);
      //    return false;
      //}
  }  
}
