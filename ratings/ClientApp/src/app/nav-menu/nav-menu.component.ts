import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
    isLogin = false;
    constructor(
        private accountService: AccountService
    ) {
        this.accountService.validarSesion().subscribe(resp => {
            if (resp.autenticado === true)
                this.isLogin = true;
            else
                this.isLogin = false;
        }
        );
    }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
