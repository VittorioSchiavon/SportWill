import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { sports } from '../sports';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {


  @Input() editable: Boolean=false;
  @Input() contentName: string="";
  @Input() content: any;
  @Output() contentChange =new EventEmitter<any>();

  sports?:string[];
  staticContent?:any;
  valid: Boolean=true;

  onModelChange(value: any) {
    //console.log(value.target.innerHTML);
    this.contentChange.emit(this.content);
    this.isValid();
  }
  constructor() { }

  ngOnInit(): void {
    this.sports=sports;
    this.staticContent=this.content;
  }


  isValid(){
    var regexpTime = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');
    //var regexpDate = new RegExp('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$');
    if(this.content==""){
      this.valid=false;
    }
    else if((this.contentName=="Length" || this.contentName=="Number of Partecipants") &&  isNaN(this.content)){
      this.valid=false;
      console.log("here")
    }
    else if((this.contentName=="Time") &&  !regexpTime.test(this.content)){
      this.valid=false;
    }/*
    else if((this.contentName=="Date") &&  !regexpDate.test(this.content)){
      this.valid=false;
    }*/else{
      this.valid=true;
    }

  }
}
