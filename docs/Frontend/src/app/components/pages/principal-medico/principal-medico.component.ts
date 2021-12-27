import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal-medico',
  templateUrl: './principal-medico.component.html',
  styleUrls: ['./principal-medico.component.css']
})
export class PrincipalMedicoComponent implements OnInit {

  datos = {
    nombre: String,
    fechaNacimiento: String,
    especialidad: String,
    clinica:String,
    universidad: String,
    cedula: String,
    genero: String
  }

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe({
      next: (data) => this.datos = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }
}