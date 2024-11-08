import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css'
})
export class PadredeportesComponent {
  public deportes: Array<String>
  public favorito:string = "" 
  seleccionarFavoritoPadre(event: any): void{
    console.log("Dato:" +event)
    this.favorito = event
  }

  constructor(){
    this.deportes = ["Futbol","Baloncesto","Tenis","Voleibol","Padel","Boxeo","F1","Remo"]
  }
}
