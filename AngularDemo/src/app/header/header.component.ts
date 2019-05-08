import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div>
              <h3>{{title}}</h3>
              <button disabled='{{isdisable}}'>Like</button> <!-- interpolation will not work for non-string properties -->
              <button [disabled]='isdisable'>Dislike</button><!-- In this case we have to use property binding -->
              <h4>{{resultDetails()}}</h4>
            </div>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : String = "Employement Protal";

  isdisable : boolean = false;

  resultDetails() : String {
    return "All the very Best!";
  }

  constructor() { 
  }

  ngOnInit() {
  }
  
}
