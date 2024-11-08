import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css'
})
export class PadrecochesComponent {
    public coches : Array<Coche>;
    constructor(){
      this.coches=[
        new Coche("Citroen","C3",160,10,false),
        new Coche("Ford","Fiesta",210,15,false),
        new Coche("Volkwagen","Golf GTI",280,40,false),
        new Coche("Seat","Leon",240,20,false)
      ]
    }
}
