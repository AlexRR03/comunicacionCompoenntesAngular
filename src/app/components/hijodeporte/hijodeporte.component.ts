import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css'
})
export class HijodeporteComponent {
  @Input() sport!:String;

  @Output() seleccionarFavoritoPadre: EventEmitter<any>= new EventEmitter

  seleccionarFavoritoHijo():void{
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
