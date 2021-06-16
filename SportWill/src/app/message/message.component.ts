import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() message?:string;
  @Output() clicked= new EventEmitter();

  ngOnInit(): void {
  }

  buttonClicked(){
    if(!this.message?.includes("Error")){
      this.router.navigate(['/homepage']);
    }else{
    }
    this.clicked.emit();
    this.message="";
  }

}
