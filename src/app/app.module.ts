import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { HeaderComponent } from './baitap1/header/header.component';
import { FooterComponent } from './baitap1/footer/footer.component';
import { MainComponent } from './baitap1/main/main.component';
import { SidebarComponent } from './baitap1/sidebar/sidebar.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Header2Component } from './baitap2/header2/header2.component';
import { Footer2Component } from './baitap2/footer2/footer2.component';
import { SliderComponent } from './baitap2/slider/slider.component';
import { BoxitemComponent } from './baitap2/boxitem/boxitem.component';
import { IndexcontentComponent } from './baitap2/indexcontent/indexcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    Baitap2Component,
    Header2Component,
    Footer2Component,
    SliderComponent,
    BoxitemComponent,
    IndexcontentComponent,
  ], //Nơi khai báo các component cho module
  imports: [
    BrowserModule
  ], //Nơi import các module khác nhau của ứng dụng vào module này
  // providers: [],
  bootstrap: [AppComponent] //Component chạy trong file index.html
})
export class AppModule { }
