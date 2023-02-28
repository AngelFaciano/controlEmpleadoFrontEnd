import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmpleadoComponent } from './component/editar-empleado/editar-empleado.component';
import { ListadoEmpleadoComponent } from './component/listado-empleado/listado-empleado.component';
import { RegistrarEmpleaedoComponent } from './component/registrar-empleaedo/registrar-empleaedo.component';

const routes: Routes = [
  {path: 'empleado',component: ListadoEmpleadoComponent},
  {path: 'editar/:id',component: EditarEmpleadoComponent},
  {path: 'editar',component: EditarEmpleadoComponent},
  {path:"registrar",component:RegistrarEmpleaedoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
