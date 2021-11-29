import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from "./components/body/body.component";
import { IniciarSesionPacienteComponent } from "./components/pages/iniciar-sesion-paciente/iniciar-sesion-paciente.component";
import { IniciarSesionMedicoComponent } from "./components/pages/iniciar-sesion-medico/iniciar-sesion-medico.component";
import { NuevoUsuarioPacienteComponent } from "./components/pages/nuevo-usuario-paciente/nuevo-usuario-paciente.component";
import { PrincipalPacienteComponent } from "./components/pages/principal-paciente/principal-paciente.component";
import { HistorialMedicoPacienteComponent } from "./components/pages/historial-medico-paciente/historial-medico-paciente.component";
import { ConsultaSeleccionadaComponent } from "./components/pages/consulta-seleccionada/consulta-seleccionada.component";
import { PrincipalMedicoComponent } from "./components/pages/principal-medico/principal-medico.component";
import { BuscarPacienteMedicoComponent } from './components/pages/buscar-paciente-medico/buscar-paciente-medico.component';
import { DiagnosticoMedicoComponent } from './components/pages/diagnostico-medico/diagnostico-medico.component';
import { MedicamentoMedicoComponent } from './components/pages/medicamento-medico/medicamento-medico.component';
import { AntecedentesMedicoComponent } from './components/pages/antecedentes-medico/antecedentes-medico.component';
import { SubirArchivoMedicoComponent } from './components/pages/subir-archivo-medico/subir-archivo-medico.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyComponent },
  { path: 'iniciarSesionPaciente', component: IniciarSesionPacienteComponent },
  { path: 'iniciarSesionMedico', component: IniciarSesionMedicoComponent },
  { path: 'nuevoUsuarioPaciente', component: NuevoUsuarioPacienteComponent},
  { path: 'principalPaciente', component: PrincipalPacienteComponent},
  { path: 'historialMedicoPaciente', component: HistorialMedicoPacienteComponent },
  { path: 'consultaSeleccionada', component: ConsultaSeleccionadaComponent },
  { path: 'principalMedico', component: PrincipalMedicoComponent },
  { path: 'buscarPacienteMedico', component: BuscarPacienteMedicoComponent},
  { path: 'diagnosticoMedico', component: DiagnosticoMedicoComponent },
  { path: 'medicamentoMedico', component: MedicamentoMedicoComponent },
  { path: 'antecedentesMedico', component: AntecedentesMedicoComponent },
  { path: 'subirArchivoMedico', component: SubirArchivoMedicoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
