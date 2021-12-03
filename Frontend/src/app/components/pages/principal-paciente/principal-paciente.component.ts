import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-principal-paciente',
  templateUrl: './principal-paciente.component.html',
  styleUrls: ['./principal-paciente.component.css']
})

export class PrincipalPacienteComponent implements OnInit {
  
  datos = {
    nombre: String, 
    apellidoPaterno: String,
    apellidoMaterno: String,
    genero: String,
    fechaNacimiento: Date,
    curp: String,
    tipoSangre: String,
    estado: String,
    ciudad: String,
    cp: Number,
    password: String
  }
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.authService.datosPaciente(localStorage.getItem('id')).subscribe(data => {
      console.log(data);
      this.datos = data;
    }, error => {
      console.log(error);
    })
  }

}
