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

  creator="Vittorio Schiavon"; //getUserData()
  message: string="";


  constructor(private route: ActivatedRoute,
    public willdata: WillDataService) {}

  ngOnInit() {
    this.will.proprietario= localStorage.getItem("userId")+"";
    this.will.nomeproprietario=this.creator;
    this.will={
      data: "12/12/2000",
      descrizione: "corsetta con i ragazzi",
      lunghezza: 3,
      luogo: "Padova",
      nomeproprietario: "Luca Sassa",
      numpart: "3",
      ora: "12:12",
      proprietario: localStorage.getItem("userId")+"",
      sport: "Running",
      tappe: "-",
      titolo: "Corsetta",
    }
  }

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
