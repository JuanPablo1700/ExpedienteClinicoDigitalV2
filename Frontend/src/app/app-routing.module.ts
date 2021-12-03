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

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyComponent },
  { path: 'iniciarSesionPaciente', component: IniciarSesionPacienteComponent },
  { path: 'iniciarSesionMedico', component: IniciarSesionMedicoComponent },
  { path: 'nuevoUsuarioPaciente', component: NuevoUsuarioPacienteComponent},
  { path: 'principalPaciente', component: PrincipalPacienteComponent, canActivate: [AuthGuard]},
  { path: 'historialMedicoPaciente', component: HistorialMedicoPacienteComponent, canActivate: [AuthGuard]},
  { path: 'consultaSeleccionada', component: ConsultaSeleccionadaComponent, canActivate: [AuthGuard]},
  { path: 'principalMedico', component: PrincipalMedicoComponent, canActivate: [AuthGuard]},
  { path: 'buscarPacienteMedico', component: BuscarPacienteMedicoComponent, canActivate: [AuthGuard]},
  { path: 'diagnosticoMedico', component: DiagnosticoMedicoComponent, canActivate: [AuthGuard]},
  { path: 'medicamentoMedico', component: MedicamentoMedicoComponent, canActivate: [AuthGuard]},
  { path: 'antecedentesMedico', component: AntecedentesMedicoComponent, canActivate: [AuthGuard]},
  { path: 'subirArchivoMedico', component: SubirArchivoMedicoComponent, canActivate: [AuthGuard]}
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
