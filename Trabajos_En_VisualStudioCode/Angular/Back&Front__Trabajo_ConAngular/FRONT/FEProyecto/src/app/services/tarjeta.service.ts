import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

private Appurl= "https://localhost:7131/";
private Apiurl = "api/tarjeta/";

  constructor(private http:HttpClient  ) { }

  geListTarjetas():Observable<any> {
    return this.http.get(this.Appurl+this.Apiurl);
  }
  deleteTarjeta(id:number):Observable <any> {
    return this.http.delete(this.Apiurl+this.Apiurl + '/'+id);
  }
  saveTarjeta(tarjeta:any):Observable <any> {
    return this.http.post(this.Appurl+this.Apiurl,tarjeta);

  }
  updateTarjeta(id:number, tarjeta:any):Observable <any>{
    return this.http.put(this.Appurl+this.Apiurl+'/'+id,tarjeta);
  }
  
}
