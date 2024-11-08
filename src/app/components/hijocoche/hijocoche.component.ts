import { Component, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css'
})
export class HijococheComponent {
    @Input() Car!: Coche;
    public mensaje: string;

  constructor(){
    this.mensaje ="";
  }
  comprobarEstado():boolean{
    if (this.Car.estado == false) {
        this.mensaje="El coche esta apagado";
        this.Car.velocidad=0;
        return false;

    }else{
      this.mensaje="Coche encendido"
      return true
    }
  }
  encenderCoche(): void{
    this.Car.estado= !this.Car.estado
    this.comprobarEstado()
  }
  acelerarCoche(): void{
    if (this.Car.estado == false) {
        alert("Arranca el coche primero cazurro")
    }else{
      this.Car.velocidad = this.Car.velocidad+this.Car.aceleracion
    }
  }
}
