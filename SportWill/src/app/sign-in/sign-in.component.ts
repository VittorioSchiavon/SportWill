import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model={
    email:"",
    password:""
  }

  message: string="";

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  signIn(){ // chiama il servizio di login passando i dati ottenuti dall'utente
    this.auth.logInUser(this.model)
    .subscribe(
      res=> {
        console.log(res);
        this.message="You Are Now Logged In.";
        localStorage.setItem('userData',JSON.stringify(res));   //salvo in memoria i dati utente
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }

}
