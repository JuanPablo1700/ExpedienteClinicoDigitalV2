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

  datos = {
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
      next: (data) => this.datos = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

}