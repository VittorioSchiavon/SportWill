import { Component, OnInit } from '@angular/core';
import { Will } from '../will';
import { FormsModule } from '@angular/forms';
import { WillDataService } from '../will-data.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cards?:any;
  username=localStorage.getItem("userId");
  checkedValue:Boolean=true;

  constructor(public willdata: WillDataService,
    public auth: AuthenticationService) { }

  ngOnInit(): void {
    console.log("hi");
    this.getData();
  }

  getData(){
    this.willdata.getWillData().subscribe(
      res=>{
        console.log(res);
        this.cards=res;
      }
    );
  }

  checked(){
    this.checkedValue=!this.checkedValue;
    console.log(this.checkedValue);
  }

}
