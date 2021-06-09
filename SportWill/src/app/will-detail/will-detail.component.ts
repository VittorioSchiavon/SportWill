import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Will } from '../will';

@Component({
  selector: 'app-will-detail',
  templateUrl: './will-detail.component.html',
  styleUrls: ['./will-detail.component.css']
})
export class WillDetailComponent implements OnInit {

  will : Will=    {
    creatorId: "",
    date: new Date(),
    description: "",
    lenght: 0,
    place: "",
    nPartecipants: 9,
    time: "",
    creator: "",
    sport: "",
    stages: "",
    title: "",
  };

  imgSrc: string= '../../assets/images/logo.png';

  editable:Boolean=false;
  username="Vittorio Schiavon";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.will=JSON.parse(this.route.snapshot.paramMap.get("id")+"");
    this.editable=(this.will.creator==this.username);
    this.imgSrc=`../../assets/SportImages/${this.will.sport}.jpeg`
  }

  submitChanges(){
    console.log(this.will);
  }

  changedValue(willS:any, event: any){
    willS=event.value;
    console.log(willS);
  }
}
