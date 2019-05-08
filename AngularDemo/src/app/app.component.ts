import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listOfData = [{"id":"101","name":"Pradhan","status":"approved"},{"id":"102","name":"Das","status":"rejected"}];
  isClicked : boolean = false;
  bind : string = 'continue';

  tuggleOn() : void{
    this.isClicked = !this.isClicked;
  }
}

