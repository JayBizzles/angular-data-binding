import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentPassedIn : string;
// makes a new event thats called passInVariableEvent
@Output() passInVariableEvent = new EventEmitter()
userInput:string;
//function that when triggered sends userInput as a parameter to where it is called
triggerEvent(){
  this.passInVariableEvent.emit(this.userInput);
}
  constructor() {  
   }

  ngOnInit() {
  }

}
