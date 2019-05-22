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
  img : any[] = [{
    "id":"img01",
    "loc":"C:\Users\BiswanathPradhan\Desktop\icon.png"
  }]

  tuggleOn() : void{
    this.isClicked = !this.isClicked;
  }
}

