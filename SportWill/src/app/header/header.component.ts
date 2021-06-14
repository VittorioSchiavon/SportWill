import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active:Boolean=false;

  isLogged:Boolean=false;
  message: string="";

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isLogged=this.auth.isAuthenticated();
  }

  toggleNavBar(){
    console.log("ciao");
  }

  dropMenu(){
    this.active=!this.active;
  }

  logout(){

    this.auth.logout();
    //window.location.reload();
    this.isLogged=false;
    this.message="You Are Now Logged Out.";

}

  login(){
  }
}
