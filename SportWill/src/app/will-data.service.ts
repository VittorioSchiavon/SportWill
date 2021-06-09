import { Injectable } from '@angular/core';
import { Will } from './will';

@Injectable({
  providedIn: 'root'
})
export class WillDataService {

  cards: Will[]=[
    {
      creatorId: "0001",
      date: new Date(2021,12,1),
      description: "TEST DESCR",
      lenght: 11,
      place: "Bassano",
      nPartecipants: 4,
      time: "12:00",
      creator: "Giovanni Sorci",
      sport: "Basketball",
      stages: "Bassano-Casa",
      title: "Basket a Bassano",
    },
    {
      creatorId: "0001",
      date: new Date(2020,12,1),
      description: "TEST DESCR",
      lenght: 14,
      place: "Padova",
      nPartecipants: 8,
      time: "11:00",
      creator: "Giovanni Sorci",
      sport: "Running",
      stages: "Padova-Casa",
      title: "Corsa a Padova",
    },
    {
      creatorId: "0002",
      date: new Date(2021,11,19),
      description: "TEST DESCR TEST DESCR TEST DESCR TEST DESCR TEST DESCR TEST DESCR TEST DESCR TEST DESCR",
      lenght: 2,
      place: "Milano",
      nPartecipants: 0,
      time: "09:00",
      creator: "Vittorio Schiavon",
      sport: "Soccer",
      stages: "Milano-Casa",
      title: "Calcetto ignorante",
    },
    {
      creatorId: "0002",
      date: new Date(2021,3,13),
      description: "TEST DESCR",
      lenght: 33,
      place: "Padova",
      nPartecipants: 2,
      time: "12:30",
      creator: "Vittorio Schiavon",
      sport: "Swimming",
      stages: "Bassano-Casa",
      title: "Nuotata in compagnia",
    },
    {
      creatorId: "0003",
      date: new Date(2021,12,1),
      description: "TEST DESCR",
      lenght: 11,
      place: "Roma via dei colli 12",
      nPartecipants: 4,
      time: "12:00",
      creator: "Matilde Pava",
      sport: "Golf",
      stages: "-",
      title: "Golfiamo ragazzi!",
    }

  ]


  constructor() { }

  getWillData(){
    return this.cards;
  }
}
