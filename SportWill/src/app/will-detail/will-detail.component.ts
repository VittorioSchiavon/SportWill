import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Will } from '../will';
import { sports } from '../sports';
import { WillDataService } from '../will-data.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-will-detail',
  templateUrl: './will-detail.component.html',
  styleUrls: ['./will-detail.component.css']
})
export class WillDetailComponent implements OnInit {

  will : any=
    {
      "proprietario": "",
      "titolo": "",
      "descrizione":"",
      "luogo": "",
      "lunghezza": "",
      "tappe": "",
      "data": "",
      "ora": "",
      "sport": "",
      "numpart" : "",
      "nomeproprietario":"",
    };

  message: string="";
  id?:string;

  username="";

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService,
    public auth: AuthenticationService) {}

  ngOnInit() {
    if(this.auth.isAuthenticated()) this.username= JSON.parse(localStorage.getItem("userData")+"").email;  // se l'utente è autenticato ottengo il suo ID (email)
    this.id=decodeURIComponent(this.route.snapshot.paramMap.get("id")+""); // ricavo l'ID dall'URL
    this.getWill();
  }

  getWill(){ //Ottengo i dati della will con l'ID desiderato
    this.willdata.getSingleWill(this.id+"").subscribe(
      res=>{
      this.will=res;
      console.log(res);
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }
}
