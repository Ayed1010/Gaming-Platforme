import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { NumbredCardsComponent } from './home/numbred-cards/numbred-cards.component';
import { ServicesCardsComponent } from './home/services-cards/services-cards.component';
import { VideoComponent } from './home/video/video.component';
import { InformationsCardsComponent } from './home/informations-cards/informations-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NumbredCardsComponent,
    ServicesCardsComponent,
    VideoComponent,
    InformationsCardsComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }