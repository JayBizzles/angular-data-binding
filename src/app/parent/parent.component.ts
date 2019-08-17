import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentVariable:string = "hello world!";
  variablePassedInFromChild: string;
  constructor() {}
  
  setVariablePassedInFromChild(dataPassedIn:string){
    this.variablePassedInFromChild = dataPassedIn;
  }   
 // Controls the actions that happen when the lifecycle trigger first happens
  ngOnInit() {

  }

}
