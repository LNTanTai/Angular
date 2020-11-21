import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//ngModue: meta-data
@NgModule({
  // declarations: noi khai báo các component duoc module quan ly
  // => AppComponent đang duoc AppModule quan ly
  // Component ko the đứng 1 minh, no phai duoc 1 module quan ly
  // 1 component chỉ co the duoc 1 module quan ly
  declarations: [AppComponent],

  // import: nơi khai báo các module
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // => De su dung duoc cac component cua HomeModule trong AppModule
  // can phai import: [HomeModule]
  // 2 loai module: 
  // - Module do angular cung cap: RouterModule, HttpClientModule
  // - Module do dev dinh nghia: HomeModule
  imports: [BrowserModule],
  
  // Noi khai bao cac services
  providers: [],
  
  // Khai bao ApppComponent la component khoi chay dau tien
  bootstrap: [AppComponent]
})
export class AppModule { }
