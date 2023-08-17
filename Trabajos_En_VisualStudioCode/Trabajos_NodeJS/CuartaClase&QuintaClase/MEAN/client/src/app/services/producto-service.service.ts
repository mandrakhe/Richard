import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable ({
  providedIn: 'root'
})

export class ProductoServiceService {

url = 'https://localhost:4001/api/productos/'


  constructor(private http:HttpClient) { }

  getProductos():Observable <any>{
    return this.http.get(this.url);
  }

  eliminarProductos(id:string):Observable <any>{
    return this.http.delete(this.url + id);
  }
  guardarProductos(producto:Producto):Observable <any>{
    return this.http.post (this.url , producto);
  }
  obtenerProductos(id:string):Observable <any>{
    return this.http.get(this.url + id);
  }

  editarProducto(id:string,producto:Producto):Observable <any>{
    return this.http.put (this.url + id, producto)
  }
}
