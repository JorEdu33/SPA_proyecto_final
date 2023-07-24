import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

const routes: Routes = [
  {path: 'empleados',component: ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'registrar-empleado',component:RegistrarEmpleadoComponent},
  {path : 'empleado-detalles/:id',component : EmpleadoDetallesComponent},
  {path: 'integrantes',component:IntegrantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
