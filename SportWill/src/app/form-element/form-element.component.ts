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

  onModelChange(value: any) {
    console.log(value.target.innerHTML);
    this.contentChange.emit(value.target.innerHTML);
  }
  constructor() { }

  ngOnInit(): void {
    this.sports=sports;
    this.staticContent=this.content;
  }
}
