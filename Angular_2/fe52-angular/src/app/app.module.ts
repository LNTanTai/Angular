import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//ngModue: meta-data
@NgModule({
  //declarations: noi khai bao cac component duoc module quan ly
  // => AppComponent dang duoc AppModule quan ly
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
