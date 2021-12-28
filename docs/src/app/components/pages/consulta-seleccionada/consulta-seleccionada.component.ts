import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-consulta-seleccionada',
  templateUrl: './consulta-seleccionada.component.html',
  styleUrls: ['./consulta-seleccionada.component.css']
})
export class ConsultaSeleccionadaComponent implements OnInit {

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

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('id')){
      this.obtenerDatosMedico();
    }
    this.obtenerDatosPaciente();
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

}