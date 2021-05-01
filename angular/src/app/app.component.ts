
import { Component, OnInit } from '@angular/core';
import  {GeolocationServiceService} from './services/geolocation-service.service' 
import { FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
 
   


 
 



constructor(private GeolocationService : GeolocationServiceService , private translate: TranslateService, private router: Router) {
  translate.setDefaultLang('ar');
 

}

ngOnInit() {
  
  this.topScrolling() ;
  this.geolocation() ;

}

   

topScrolling() {

          this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
          return;
            }
          window.scrollTo(0, 0)}); 
              }


geolocation(){

           this.GeolocationService.getData().subscribe((data)=> {
           if( data.country == "Tunisia"|| data.country=="France" )    this.translate.use('fr');
           else  if(data.country== "katar"|| data.country=="Saudi Arabia" )    this.translate.use('ar');
           else this.translate.use('en');
           console.log(data.country) ; })}







       }