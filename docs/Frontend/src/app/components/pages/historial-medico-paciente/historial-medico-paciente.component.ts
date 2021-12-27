import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-historial-medico-paciente',
  templateUrl: './historial-medico-paciente.component.html',
  styleUrls: ['./historial-medico-paciente.component.css']
})
export class HistorialMedicoPacienteComponent implements OnInit {

  usuario = {
    nombreMedico: localStorage.getItem('nombreUsuario')
  }

  nombre = {
    nombre: String, 
    apellidoPaterno: String,
    apellidoMaterno: String
  }

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.authService.datosPaciente(localStorage.getItem('id_paciente')).subscribe({
      next: (data) => this.nombre = data,
      error: error => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  obtenerConsultas() {
    //Falta por desarrolar
  }

}