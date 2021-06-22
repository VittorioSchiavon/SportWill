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

will: any= {
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

submitted = false;

onSubmit() { this.submitted = true; }

  imgSrc: string= '../../assets/Images/logo.png';
  message: string="";
  id?:string;

  editable:Boolean=false;
  user:any="";
  toCreate:Boolean=false;
  sports=sports;

  today="";

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService,
    public auth: AuthenticationService) {}

  ngOnInit() {
    this.setDate();
    if(this.auth.isAuthenticated()) this.user= JSON.parse(localStorage.getItem("userData")+"");
    //this.will=JSON.parse(decodeURIComponent(this.route.snapshot.paramMap.get("id")+""));
    this.id=decodeURIComponent(this.route.snapshot.paramMap.get("id")+"");
    this.will.proprietario= this.user.email ; //prendo dalla local storage i dati utente
    this.will.nomeproprietario=this.user.nome+ " "+ this.user.cognome; //setto il nome corretto


    if(this.id=="null"){
      this.toCreate=true;
    }else{
      this.getWill();
    }

  }

  submitChanges(){
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

  deleteWill(){
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

  getWill(){
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

  changedValue(willS:any, event: any){
    willS=event.value;
    console.log(willS);
  }


  setDate(){
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
