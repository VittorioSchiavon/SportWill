import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Will } from '../will';
import { sports } from '../sports';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-will-card',
  templateUrl: './will-card.component.html',
  styleUrls: ['./will-card.component.css'],
})
export class WillCardComponent implements OnInit {
  @Input() will: any; /*=
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
  imgSrc?: string;

  constructor(private router: Router, public auth: AuthenticationService) {}

  ngOnInit(): void {
    if (sports.includes(this.will.sport)) {
      this.imgSrc = `../../assets/SportImages/Icons/${this.will.sport}.svg`;
    } else {
      this.imgSrc = `../../assets/SportImages/Icons/Other.svg`;
    }
  }

  navigate() {
    //quando viene premuta la card, se il proprietario della will premuta è l'utente => vado alla schermata di moficica passando l'ID, sennò alla schermata di visualizzazione
    if (this.auth.getUserEmail() == this.will.proprietario) {
      this.router.navigate([`/edit/${encodeURIComponent(this.will.id)}`]);
    } else {
      this.router.navigate([`/detail/${encodeURIComponent(this.will.id)}`]);
    }
  }
}
