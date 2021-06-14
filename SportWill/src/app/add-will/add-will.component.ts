import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Will } from '../will';
import { WillDataService } from '../will-data.service';

@Component({
  selector: 'app-add-will',
  templateUrl: './add-will.component.html',
  styleUrls: ['./add-will.component.css']
})
export class AddWillComponent implements OnInit {
//creo una nuova will vuota
  will : Will={
    "proprietario": "",
    "titolo": "",
    "descrizione": "",
    "luogo": "",
    "lunghezza": 0,
    "tappe": "",
    "data": "",
    "ora": "",
    "sport": "",
    "numpart" : "",
    "nomeproprietario": ""
    };

  creator=JSON.parse(localStorage.getItem("userData")+"");
  message: string=""; //stringa da passare al popup gestito da messageComponent


  constructor(private route: ActivatedRoute,
    public willdata: WillDataService) {}

  ngOnInit() {
    console.log(this.creator);

    this.will.proprietario= this.creator.email ; //prendo dalla local storage i dati utente
    this.will.nomeproprietario=this.creator.nome+ " "+ this.creator.cognome; //setto il nome corretto
  }

  //funione invocata quando si conferma la creazione di una will. Invoca la funzione di WillDataComponent
  //createWill che comunica con il BE
  createWill(){
    this.willdata.createWill(this.will).subscribe(
      res=>{
        console.log(res);
        this.message="Will Created Successfully.";
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }

}
