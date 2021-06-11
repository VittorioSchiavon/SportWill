import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("token")}`,'Access-Control-Allow-Origin': '*'})
  };

  private signInUrl='http://synchost.ns0.it:8091/signin';
  private signUpUrl='http://synchost.ns0.it:8091/signup';
  private userDataUrl="http://synchost.ns0.it:8091/utenti/login/"

  registerUser(user:any){
    return this.http.post<any>(this.signUpUrl, user);
  }

  logInUser(user:any){
    return this.http.post<any>(this.signInUrl, user);
  }

  isAuthenticated(){
    return localStorage.getItem("token")!=null;
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem('userId');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  getUserData(email: string){
    return this.http.get<any>(this.userDataUrl, this.httpOptions);
  }
}
