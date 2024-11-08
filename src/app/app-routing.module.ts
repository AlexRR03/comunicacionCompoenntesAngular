import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HomeComponent } from './components/home/home.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';

const routes: Routes = [
  { 
    path:"", component:HomeComponent
  },
  { 
    path:"listaproductos", component:ListaproductosComponent
  },
  {
    path:"coche", component:PadrecochesComponent
  },
  {
    path:"deportes", component:PadredeportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
