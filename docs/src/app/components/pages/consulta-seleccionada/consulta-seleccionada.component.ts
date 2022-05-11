import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ListaAntecedentes } from 'src/models/listaAntecedentes';
import { ListaMedicamentos } from 'src/models/listaMedicamentos';
import { listaArchivos } from 'src/models/listaArchivos';

@Component({
  selector: 'app-consulta-seleccionada',
  templateUrl: './consulta-seleccionada.component.html',
  styleUrls: ['./consulta-seleccionada.component.css']
})
export class ConsultaSeleccionadaComponent implements OnInit {

  consultaAntecedentes: ListaAntecedentes[] = [];
  consultaMedicamentos: ListaMedicamentos[] = [];
  consultaArchivos: listaArchivos[] = [];

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

  diagnostico = {
    id_paciente: "",
    fechaActual: "",
    Atendio: "",
    diagGeneral: "",
    descrip: "",
    listaMedicamentos: [],
    listaAntecedentes: [],
    listaArchivos: []
  }

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem('id')){
      this.obtenerDatosMedico();
    }
    this.obtenerDatosPaciente();
    
    this.obtenerConsultasSeleccionada();
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

  obtenerConsultasSeleccionada() {
    this.authService.obtenerConsultasSeleccionada(localStorage.getItem('id_consulta')).subscribe({
      next: (data) => {
        this.diagnostico = data;
        this.consultaAntecedentes = this.diagnostico.listaAntecedentes;
        this.consultaMedicamentos = this.diagnostico.listaMedicamentos;
        this.consultaArchivos = this.diagnostico.listaArchivos;
        console.log(this.diagnostico);
        console.log(this.consultaAntecedentes)
      },
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  obtieneFecha(){
    return this.diagnostico.fechaActual.split('T')[0];
  }
}