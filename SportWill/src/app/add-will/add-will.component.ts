import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Will } from '../will';
@Component({
  selector: 'app-add-will',
  templateUrl: './add-will.component.html',
  styleUrls: ['./add-will.component.css']
})
export class AddWillComponent implements OnInit {

  will : Will=    {
    creatorId: "",
    date: new Date(),
    description: "",
    lenght: 0,
    place: "",
    nPartecipants: 0,
    time: "",
    creator: "",
    sport: "",
    stages: "",
    title: "",
  };

  creator="Vittorio Schiavon";
  creatorId="0002";



  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.will.creator=this.creator;
    this.will.creatorId=this.creatorId;
  }

  submitChanges(){
    console.log(this.will);
  }

}
