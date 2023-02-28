import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent {
  empleado:Empleado[];
  emp:Empleado=null;
  num:number=null;



  constructor(private empleadoS:EmpleadoService,private activartedRouter:ActivatedRoute,
    private router:Router){}
  ngOnInit(): void {
    const id=this.activartedRouter.snapshot.params['id'];
    this.num=id;
    if(id ==null){
      this.obtenerEmpleado();
    }else{
      this.empleadoS.buscarEmpleado(id).subscribe(data=>{this.emp=data;}
        ,err=>{alert("Error");})
    }
  }
  private obtenerEmpleado(){
    this.empleadoS.ListadoDeEmpleado().subscribe(arg => this.empleado = arg);
  }onUpdate():void{
    const id=this.activartedRouter.snapshot.params['id'];
    this.empleadoS.EditarEmpleado(id,this.emp).subscribe(data =>{
      this.router.navigate(['/empleado'])
      alert("Empleado Edi")
  },err=>{alert(err);this.router.navigate(['/empleado']);
  }
  )
  }
}
