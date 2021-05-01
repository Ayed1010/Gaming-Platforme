import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { NumbredCardsComponent } from './home/numbred-cards/numbred-cards.component';
import { ServicesCardsComponent } from './home/services-cards/services-cards.component';
import { VideoComponent } from './home/video/video.component';
import { InformationsCardsComponent } from './home/informations-cards/informations-cards.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component' ; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NumbredCardsComponent,
    ServicesCardsComponent,
    VideoComponent,
    InformationsCardsComponent,
    AboutUsComponent,
    ContactUsComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }