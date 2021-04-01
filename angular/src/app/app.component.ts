
import { Component, OnInit } from '@angular/core';
import  {GeolocationServiceService} from './services/geolocation-service.service' 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
 /* data:Array<any>*/
      userLocation = 'hello' ; 

constructor(private GeolocationService : GeolocationServiceService) {

 /* this.data= new Array<any>()*/
}

ngOnInit() {
  let x = "he" ; 
  this.GeolocationService.getData().subscribe((data)=> {
 
    console.log(data.country)
  
  
  })




  



    
  
 
  
  
}





}

 