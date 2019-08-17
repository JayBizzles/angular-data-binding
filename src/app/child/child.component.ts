import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentPassedIn : string;
@Output() passInVariableEvent = new EventEmitter()
userInput:string;
triggerEvent(){
  this.passInVariableEvent.emit(this.userInput);
}
  constructor() {  
   }

  ngOnInit() {
  }

}
