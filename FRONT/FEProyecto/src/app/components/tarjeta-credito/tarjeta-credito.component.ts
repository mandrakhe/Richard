import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: 'zacarias', NumeroTarjeta: '12452341', Expiracion: '12/12', Cvv: '123' },
    { titular: 'Menegildo', NumeroTarjeta: '122312341', Expiracion: '11/11', Cvv: '456' }
  ]


  form: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = fb.group({
      titular: ['', Validators.required],
      NumeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      Expiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      Cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }
  ngOnInit() { }
  AgragarTarjeta() {
    console.log(this.form);
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      NumeroTarjeta: this.form.get('NumeroTarjeta')?.value,
      Expiracion: this.form.get('Expiracion')?.value,
      Cvv: this.form.get('Cvv')?.value
    }
    this.listTarjetas.push(tarjeta);
    console.log(tarjeta);
    
    this.toastr.success('Tarjeta registrada con éxito', 'Tarjeta registrada');
    this.form.reset();
  }
  EliminarTarjeta(index: number) {
    this.listTarjetas.splice(index, 1);
    this.toastr.success('Tarjeta eliminada con éxito', 'Tarjeta eliminada');
  }
}
