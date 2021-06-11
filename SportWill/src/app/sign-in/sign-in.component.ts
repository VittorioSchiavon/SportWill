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

  signIn(){
    this.auth.logInUser(this.model)
    .subscribe(
      res=> {
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
