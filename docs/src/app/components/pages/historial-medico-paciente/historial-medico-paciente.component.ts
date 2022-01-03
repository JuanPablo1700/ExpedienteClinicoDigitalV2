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

  datosMedico = {
    nombre: '', 
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: ''
  }

  datosPaciente = {
    nombre: '', 
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: ''
  }

  diagnostico = [{
    _id: "",
    fechaActual: "",
    Atendio: "",
    diagGeneral: "",
    descrip: ""
  }]

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('id')){
      this.obtenerDatosMedico();
    }
    this.obtenerDatosPaciente();

    this.obtenerConsultas();
  }

  obtenerDatosMedico() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe({
      next: (data) => this.datosMedico = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  obtenerDatosPaciente() {
    this.authService.datosPaciente(localStorage.getItem('id_paciente')).subscribe({
      next: (data) => this.datosPaciente = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  obtenerConsultas() {
    this.authService.obtenerConsultas(localStorage.getItem('id_paciente')).subscribe({
      next: (data) => {
        this.diagnostico = data;
        console.log(this.diagnostico[0]._id)
      },
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

}