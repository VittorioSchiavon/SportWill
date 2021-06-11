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

  signUp(){
    this.auth.registerUser(this.model)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('userId',JSON.parse(atob(res.token.split('.')[1])).sub);
        this.message="You Are Now Logged In.";
        localStorage.setItem('token',res.token);
        //this.getUserData();

      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }


getUserData(){
this.auth.getUserData(this.model.email).subscribe(
  res=>{
    console.log(res);
    localStorage.setItem("userData", JSON.stringify(res));
  }
);
}


}
