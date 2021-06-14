import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("token")}`,'Access-Control-Allow-Origin': '*'})
  };


  registerUser(user:any){
    return this.http.post<any>(environment.signUpUrl, user);
  }

  logInUser(user:any){
    return this.http.post<any>(environment.signInUrl, user);
  }

  isAuthenticated(){
    return localStorage.getItem("userData")!=null;
  }

  logout(){
    localStorage.removeItem("userData");
  }

  getUserData(email: string){
    return localStorage.getItem("userData");
  }


  getUserEmail(){
    if(this.isAuthenticated()){
      return JSON.parse(localStorage.getItem("userData")+"").email;
    }
    return "";
  }


  getUserFullName(){
    if(this.isAuthenticated()){
      var temp=JSON.parse(localStorage.getItem("userData")+"");
      return temp.nome+ " "+ temp.cognome ;
    }
    return "";
  }
}
