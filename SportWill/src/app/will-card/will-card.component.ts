import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Will } from '../will';

@Component({
  selector: 'app-will-card',
  templateUrl: './will-card.component.html',
  styleUrls: ['./will-card.component.css']
})
export class WillCardComponent implements OnInit {


  @Input() will : Will=    {
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

  imgSrc?:string

  constructor() { }

  ngOnInit(): void {
    this.imgSrc=`../../assets/SportImages/${this.will.sport}.jpeg`
  }

}
