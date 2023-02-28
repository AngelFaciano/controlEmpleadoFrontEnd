import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private URL="http://localhost:8080/api/v1/"


  constructor(private httpClient:HttpClient) { }

  public ListadoDeEmpleado():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.URL}`+"empleados")
  }
  public RegistrarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.httpClient.post<Empleado>(`${this.URL}`+"empleado",empleado);
  }
  public buscarEmpleado(id: number): Observable<any>{
    return this.httpClient.get<Empleado>(this.URL + `empleado/${id}`);
  }
  public BorrarEmpleado(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `empleado/${id}`);
  }
  public EditarEmplead(id: number,empleado:Empleado): Observable<any>{
    return this.httpClient.put<Empleado>(this.URL + `editar/${id}`,empleado);
  }
  public EditarEmpleado(id: number, empleado: Empleado): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, empleado);
  }

}
