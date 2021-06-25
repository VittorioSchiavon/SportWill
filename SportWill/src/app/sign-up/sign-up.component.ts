import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model={
    nome:"",
    cognome:"",
    email:"",
    password:""
  }

  message: string="";

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  signUp(){  // chiama il servizio di login passando i dati ottenuti dall'utente
    this.auth.registerUser(this.model)
    .subscribe(
      res=>{
        console.log(res);
        this.message="You Are Now Logged In.";
        localStorage.setItem('userData',JSON.stringify(res));

      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }


}
