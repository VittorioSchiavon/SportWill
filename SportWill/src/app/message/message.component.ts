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

  @Input() message?:string;  //ottengo in input il messaggio da mostrare
  @Output() clicked= new EventEmitter(); //creao l'evendo da emanare quando si preme il pulsante

  ngOnInit(): void {
  }

  buttonClicked(){
    if(!this.message?.includes("Error")){   //se il messaggio non contiene Error, allora naviga alla Home
      this.router.navigate(['/homepage']);
    }
    this.clicked.emit();    // emette l'evento di reset di messaggio, verrà catturato dal componente padre
    this.message="";
  }

}
