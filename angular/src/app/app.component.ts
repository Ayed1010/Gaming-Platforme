
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
  
 /* data:Array<any>*/
      userLocation = 'hello' ; 
      location : String = "MyLocation" ; 
      


 
 



constructor(private GeolocationService : GeolocationServiceService , private translate: TranslateService, private router: Router) {
  translate.setDefaultLang('ar');
  this.geolocation() ;
 /* this.data= new Array<any>()*/
}

ngOnInit() {
  
 
   

  
  this.topScrolling() ;


 

 if( this.location == "Tunisia"|| this.location =="France" )    this.translate.use('fr');
else  if( this.location== "katar"|| this.location=="Saudi Arabia" )    this.translate.use('ar');
else this.translate.use('en');
   





 
 


}

   

topScrolling() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  }); }


  geolocation(){

    this.GeolocationService.getData().subscribe((data)=> {
      if( data.country == "Tunisia"|| data.country=="France" )    this.translate.use('ar');
      else  if(data.country== "katar"|| data.country=="Saudi Arabia" )    this.translate.use('ar');
      else this.translate.use('en');
         
 console.log(data.country) 
 
 
     
  
  
  
   })

  }


}