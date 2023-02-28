import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-registrar-empleaedo',
  templateUrl: './registrar-empleaedo.component.html',
  styleUrls: ['./registrar-empleaedo.component.css']
})
export class RegistrarEmpleaedoComponent implements OnInit {
  empleado:Empleado=new Empleado();
  nombreE:string='';
  descripcionE:string='';
  constructor(private empleadoS:EmpleadoService,private  router: Router){  }

  ngOnInit(): void {
  }
  guardarEmpleado(){
    this.empleadoS.RegistrarEmpleado(this.empleado).subscribe(data =>{this.router.navigate(['/empleado']);
  },err=>{alert("Error Al Guardiar Empleado");this.router.navigate(['/empleado']);
  }
  )

  }
  onCreate(){
    this.guardarEmpleado()
  }

}
