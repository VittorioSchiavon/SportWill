import { Component, Input, OnInit } from '@angular/core';
import { sports } from '../sports';
import { ActivatedRoute } from '@angular/router';
import { WillDataService } from '../will-data.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-editable-form',
  templateUrl: './editable-form.component.html',
  styleUrls: ['./editable-form.component.css']
})
export class EditableFormComponent implements OnInit {

will: any= {  // contenitore dei dati della will
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


  imgSrc: string= '../../assets/Images/logo.png';
  message: string="";
  id?:string;

  user:any="";
  toCreate:Boolean=false;
  sports=sports; //array con l'elenco degli sport disponibili

  today=""; //variabile che tiene la data corrente

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService,
    public auth: AuthenticationService) {}

  ngOnInit() {
    this.setDate();
    if(this.auth.isAuthenticated()) this.user= JSON.parse(localStorage.getItem("userData")+""); //prendo dalla local storage i dati utente
    this.id=decodeURIComponent(this.route.snapshot.paramMap.get("id")+"");  //ottengo l'id dall'URL
    this.will.proprietario= this.user.email ; //setto l'email corretta
    this.will.nomeproprietario=this.user.nome+ " "+ this.user.cognome; //setto il nome corretto


    if(this.id=="null"){ //se l'URL è null vuol dire che devo craere una will nuova
      this.toCreate=true;
    }else{
      this.getWill();
    }

  }

  submitChanges(){ //quando invocata richiama la chiamata http POST Bdi creazione/modifica di una will presente nel service will data
    this.willdata.createWill(this.will).subscribe(
      res=>{
        this.message="Will Saved Successfully.";
        console.log(res);
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }

  deleteWill(){ //quando invocata richiama la chiamata http SELETE di eliminazione di una will
    this.willdata.deleteWill(this.will).subscribe(
      res=>{
        console.log(res);
        this.message="Will Removed Successfully.";
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }

  getWill(){ //quando invocata richiama la chiamata http GET di ottenimento di una will con dato id
    this.willdata.getSingleWill(this.id+"").subscribe(
      res=>{
      this.will=res;
      console.log(res);
      this.setImage();
      },
      err=>{
        this.message="Error, try again.";
      }
    );
    }

    setImage(){
      if (sports.includes(this.will.sport)){
        this.imgSrc=`../../assets/SportImages/Icons/${this.will.sport}.svg`;
      }else{
        this.imgSrc=`../../assets/SportImages/Icons/Other.svg`;
      }
    }


  setDate(){    //setta la data nel formato corretto
    var todayDate= new Date();
    console.log(todayDate)
    this.today= todayDate.getFullYear()+ "-";
    if ((todayDate.getMonth()+1).toString().length==1){
      this.today+="0" }
      this.today+=(todayDate.getMonth()+1).toString()+"-";

      if (todayDate.getDate().toString().length==1){
        this.today+="0" }
      this.today+=todayDate.getDate().toString();
      console.log(this.today)

  }
}
