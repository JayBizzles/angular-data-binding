import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentVariable:string = "hello world!";

  constructor() {}
   
 // Controls the actions that happen when the lifecycle trigger first happens
  ngOnInit() {

  }

}
