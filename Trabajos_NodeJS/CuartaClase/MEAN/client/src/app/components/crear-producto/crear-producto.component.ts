import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

productoForm : FormGroup;

titulo = 'crear - producto';
//id = String;

constructor( private fb : FormBuilder){ 

  this.productoForm = this.fb.group({

    producto: ['',Validators.required],
    categoria: ['',Validators.required],
    ubicacion: ['',Validators.required],
    precio: ['',Validators.required]

  })

}

ngOnInit(): void {


}
agregarProducto(){

console.log(this.productoForm);

}

}


