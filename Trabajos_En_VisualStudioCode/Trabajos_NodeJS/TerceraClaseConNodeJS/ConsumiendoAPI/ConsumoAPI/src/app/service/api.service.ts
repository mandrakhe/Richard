import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http:HttpClient) { }
  private URL = 'http://localhost:5000';
  
  public getAPIService ():Observable<any> {
    return this.http.get<any>(this.URL)
  }



}