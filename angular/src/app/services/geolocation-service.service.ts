import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {

  constructor(private http :HttpClient) { }

getData(): Observable<any>{

const url = "http://ipwhois.app/json/"
 return this.http.get<any>(url) 
}  






}