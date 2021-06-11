import { Injectable } from '@angular/core';
import { Will } from './will';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WillDataService {


/*
{
"id": 1522,

"proprietario": "nome",

"titolo": "inserimento nuova uscita",

"descrizione": "test per l'inserimento di una nuova uscita",
"luogo": "Padova",

"lunghezza": 3.0,

"tappe": "nessuna",

"data": "03/03/2021",


"ora": "16:47",

"sport": "camminata",

"numpart" : "1",

"nomeproprietario": "“alisa"
}
*/
  constructor(private http: HttpClient) { }

  private getDataUrl='http://synchost.ns0.it:8080/uscite/';
  private sendDataUrl="http://synchost.ns0.it:8080/uscite/inserisci";
  private deleteDataUrl="http://synchost.ns0.it:8080/uscite/elimina/"

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("token")}`,'Access-Control-Allow-Origin': '*'})
  };

  getWillData(){
    //return this.cards;
    return this.http.get(this.getDataUrl, this.httpOptions);
  }

  createWill(newWill: any){
    return this.http.post(this.sendDataUrl, newWill, this.httpOptions);
  }

  deleteWill(will: any){
    return this.http.delete(this.deleteDataUrl +will.id, this.httpOptions);
  }

}
