import { Injectable } from '@angular/core';
import { Will } from './will';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WillDataService {


  constructor(private http: HttpClient) { }



  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("token")}`,'Access-Control-Allow-Origin': '*'})
  };

  getWillData(){
    //return this.cards;
    return this.http.get(environment.getDataUrl, this.httpOptions);
  }

  createWill(newWill: any){
    return this.http.post(environment.sendDataUrl, newWill, this.httpOptions);
  }

  deleteWill(will: any){
    return this.http.delete(environment.deleteDataUrl +will.id, this.httpOptions);
  }

  getSingleWill(id:string){
    return this.http.get(environment.getDataUrl +id, this.httpOptions);
  }

}
