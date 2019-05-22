import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: 'foot', component: FooterComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   routes,
    //   { enableTracing: true } 
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
