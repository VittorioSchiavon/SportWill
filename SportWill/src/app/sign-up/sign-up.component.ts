import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model={
    name:"",
    surname:"",
    email:"",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    alert("Congratulation, you have created an account!");
  }

  onSubmit(){}

}
