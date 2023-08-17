export class Producto{
    _id?:number;
    nombre:string;
    categoria:string;
    ubicacion:string;
    precio:number;

    constructor(nombre:string, categoria:string,ubicacion:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
    }

    
}