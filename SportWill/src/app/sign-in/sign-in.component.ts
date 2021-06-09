import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.model);
    alert("Congratulation, now you are logged in!");
  }

  onSubmit(){
    console.log(this.model);
    alert("Congratulation, now you are logged in!");
  }

}
