import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { IniciarSesionPacienteComponent } from './components/pages/iniciar-sesion-paciente/iniciar-sesion-paciente.component';
import { IniciarSesionMedicoComponent } from './components/pages/iniciar-sesion-medico/iniciar-sesion-medico.component';
import { NuevoUsuarioPacienteComponent } from './components/pages/nuevo-usuario-paciente/nuevo-usuario-paciente.component';
import { PrincipalPacienteComponent } from './components/pages/principal-paciente/principal-paciente.component';
import { HistorialMedicoPacienteComponent } from './components/pages/historial-medico-paciente/historial-medico-paciente.component';
import { ConsultaSeleccionadaComponent } from './components/pages/consulta-seleccionada/consulta-seleccionada.component';
import { PrincipalMedicoComponent } from './components/pages/principal-medico/principal-medico.component';
import { BuscarPacienteMedicoComponent } from './components/pages/buscar-paciente-medico/buscar-paciente-medico.component';
import { DiagnosticoMedicoComponent } from './components/pages/diagnostico-medico/diagnostico-medico.component';
import { MedicamentoMedicoComponent } from './components/pages/medicamento-medico/medicamento-medico.component';
import { AntecedentesMedicoComponent } from './components/pages/antecedentes-medico/antecedentes-medico.component';
import { SubirArchivoMedicoComponent } from './components/pages/subir-archivo-medico/subir-archivo-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    IniciarSesionPacienteComponent,
    IniciarSesionMedicoComponent,
    NuevoUsuarioPacienteComponent,
    PrincipalPacienteComponent,
    HistorialMedicoPacienteComponent,
    ConsultaSeleccionadaComponent,
    PrincipalMedicoComponent,
    BuscarPacienteMedicoComponent,
    DiagnosticoMedicoComponent,
    MedicamentoMedicoComponent,
    AntecedentesMedicoComponent,
    SubirArchivoMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
