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
    fechaNacimiento: Date,
    especialidad: String,
    clinica:String,
    universidad: String,
    cedula: String
  }

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe(data => {
      console.log(data);
      this.datos = data;
    }, error => {
      console.log(error);
    })
  }
}
