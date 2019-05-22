import { Component, OnInit, Injectable } from '@angular/core';
//import { Http2Server } from 'http2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

@Injectable()
export class FooterComponent implements OnInit {

  //http: Http2Server;
  constructor() {
   }

  ngOnInit() {
  }

  public searchLog(){
   // let searchURL = "http://localhost:8086/MRAS/viewer/view";
   // window.open(searchURL, '_blank');
  }

  // public demoRestResult(): Observable<string> {
  //   var targetURL = "http://localhost:8086/Angular_Rest_Integration/demo/details";
  //   return this.http
  // }
}
