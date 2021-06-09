import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active:Boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar(){
    console.log("ciao");
  }

  dropMenu(){
    this.active=!this.active;
  }

}
