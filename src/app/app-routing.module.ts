import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HomeComponent } from './components/home/home.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';

const routes: Routes = [
  { 
    path:"", component:HomeComponent
  },
  { 
    path:"listaproductos", component:ListaproductosComponent
  },
  {
    path:"coche", component:PadrecochesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
