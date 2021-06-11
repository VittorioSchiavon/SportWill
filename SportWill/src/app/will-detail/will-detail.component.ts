import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Will } from '../will';
import { sports } from '../sports';
import { WillDataService } from '../will-data.service';

@Component({
  selector: 'app-will-detail',
  templateUrl: './will-detail.component.html',
  styleUrls: ['./will-detail.component.css']
})
export class WillDetailComponent implements OnInit {

  will ?: any/*=
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
    };*/

  imgSrc: string= '../../assets/images/logo.png';
  message: string="";

  editable:Boolean=false;
  username=localStorage.getItem("userId");

  constructor(private route: ActivatedRoute,
    public willdata: WillDataService) {}

  ngOnInit() {
    this.will=JSON.parse(decodeURIComponent(this.route.snapshot.paramMap.get("id")+""));
    this.editable=(this.will.proprietario==this.username);

    if (sports.includes(this.will.sport)){
      this.imgSrc=`../../assets/SportImages/${this.will.sport}.jpeg`;
    }else{
      this.imgSrc=`../../assets/SportImages/other.jpg`;
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
  changedValue(willS:any, event: any){
    willS=event.value;
    console.log(willS);
  }
}
