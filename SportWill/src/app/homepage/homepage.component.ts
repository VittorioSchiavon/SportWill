import { Component, OnInit } from '@angular/core';
import { Will } from '../will';
import { FormsModule } from '@angular/forms';
import { WillDataService } from '../will-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cards?:Will[];
  username="Vittorio Schiavon";
  checkedValue:Boolean=true;

  constructor(public willdata: WillDataService) { }

  ngOnInit(): void {
    this.cards=this.willdata.getWillData();
  }

  checked(){
    this.checkedValue=!this.checkedValue;
    console.log(this.checkedValue);
  }

}
