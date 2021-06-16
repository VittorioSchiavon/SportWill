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

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService,
    public auth: AuthenticationService) {}

  ngOnInit() {
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
        this.message="Will Changed Successfully.";
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
        this.imgSrc=`../../assets/SportImages/${this.will.sport}.jpeg`;
      }else{
        this.imgSrc=`../../assets/SportImages/Other.jpeg`;
      }
    }

  changedValue(willS:any, event: any){
    willS=event.value;
    console.log(willS);
  }
}
