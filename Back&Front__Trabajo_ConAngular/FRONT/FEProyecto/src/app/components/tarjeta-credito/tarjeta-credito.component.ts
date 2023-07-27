import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [];
  accion = "Agregar";

  form: FormGroup;
  id: number|undefined;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService
  ) {
    this.form = fb.group({
      titular: ['', Validators.required],
      NumeroTarjeta: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
        ],
      ],
      Expiracion: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      Cvv: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
    });
  }
  ngOnInit(): void {
    this.obtenerTargetas();
  }

  obtenerTargetas() {
    this._tarjetaService.geListTarjetas().subscribe(
      (data) => {
        console.log(data);
        this.listTarjetas = data;
      },
      (error) => {
        console.log();
      }
    );
  }

  AgragarTarjeta() {
    console.log(this.form);
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      NumeroTarjeta: this.form.get('NumeroTarjeta')?.value,
      Expiracion: this.form.get('Expiracion')?.value,
      Cvv: this.form.get('Cvv')?.value,
    }

      if(this.id == undefined ){
         this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
    this.toastr.success('Tarjeta registrada con éxito', 'Tarjeta registrada');
    this.obtenerTargetas ();
    this.form.reset();
    },error=>{
      this.toastr.error('Upppps Error Capa 8', 'Error');
    })
      }else{
        tarjeta.id = this.id;
        this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data => {
          this.form.reset();
          this.accion='Agregar'
          this.id = undefined;
          this.toastr.info('Tarjeta editada con éxito', 'Tarjeta editada');
          this.obtenerTargetas();


        },error=>{this.toastr.success('Tarjeta registrada con éxito', 'Tarjeta registrada');
      })
      }

   
    //console.log(tarjeta);

    
  }
  EliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data=>{
      this.toastr.error('Tarjeta eliminada con éxito', 'Tarjeta eliminada');
      this.obtenerTargetas();
    },error=>{
      console.log(error);
    })
  }
  editarTarjeta(tarjetaId: any) {
    this.accion='Editar';
    this.id=tarjetaId.id;
    this.form.patchValue({
      titular: tarjetaId.titular,
      NumeroTarjeta:tarjetaId.NumeroTarjeta,
         Expiracion:tarjetaId.Expiracion,
                Cvv:tarjetaId.Cvv
      
          
    });
  }
}
