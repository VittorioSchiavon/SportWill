import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: Boolean = false; //memorizza se l'utente ha effettuato l'accesso
  message: string = '';

  constructor(public auth: AuthenticationService) {}

  ngOnInit(): void {
    this.isLogged = this.auth.isAuthenticated();
  }

  logout() {
    // effettua il logout e printa il messaggio
    this.auth.logout();
    this.isLogged = false;
    this.message = 'You Are Now Logged Out.';
  }
}
