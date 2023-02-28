import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit  {
empleado:Empleado[];


  constructor(private empleadoS:EmpleadoService){}
  ngOnInit(): void {
    this.obtenerEmpleado();
  }
  private obtenerEmpleado(){
    this.empleadoS.ListadoDeEmpleado().subscribe(arg => this.empleado = arg);
  }
  delete(id:number){
    this.empleadoS.BorrarEmpleado(id).subscribe();
  }
  onClick() {
    event.target.addEventListener('click',(event:any)=>{const parent=event.target.parentElement.parentElement;
      parent.remove();
    })
  }

}
