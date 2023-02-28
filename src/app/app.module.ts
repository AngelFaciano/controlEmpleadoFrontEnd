import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoEmpleadoComponent } from './component/listado-empleado/listado-empleado.component';
import{HttpClientModule} from '@angular/common/http';
import { RegistrarEmpleaedoComponent } from './component/registrar-empleaedo/registrar-empleaedo.component';
import { EditarEmpleadoComponent } from './component/editar-empleado/editar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEmpleadoComponent,
    ListadoEmpleadoComponent,
    RegistrarEmpleaedoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
