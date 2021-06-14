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

  will ?: any=
    {
      "proprietario": "",
      "titolo": "",
      "descrizione":"",
      "luogo": "",
      "lunghezza": 0,
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

  editable:Boolean=false;
  username="";

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService,
    public auth: AuthenticationService) {}

  ngOnInit() {
    if(this.auth.isAuthenticated()) this.username= JSON.parse(localStorage.getItem("userData")+"").email;
    //this.will=JSON.parse(decodeURIComponent(this.route.snapshot.paramMap.get("id")+""));
    this.id=decodeURIComponent(this.route.snapshot.paramMap.get("id")+"");
    this.getWill();
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
      this.editable=(this.will.proprietario==this.username);
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
        this.imgSrc=`../../assets/SportImages/other.jpg`;
      }
    }
  changedValue(willS:any, event: any){
    willS=event.value;
    console.log(willS);
  }
}
