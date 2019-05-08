import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  //templateUrl: './register.component.html',
  template : `<form>
                
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control">
                </div>

                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control">
                </div>

                <div class="form-group">
                  <label>DOB</label>
                  <input type="date" class="form-control">
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control">
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control">
                </div>

                <div class="form-group">
                  <label>Language</label>
                  <select class="form-control">
                    <option value="">Please select a language</option>
                    <option *ngFor="let lang of langs"
                            [value]="lang">
                            {{lang}}
                    </option>
                  </select>
                </div>
              </form>`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  langs:string[] = [
    'English',
    'French',
    'German',
];
  constructor() { }

  ngOnInit() {
  }

}
