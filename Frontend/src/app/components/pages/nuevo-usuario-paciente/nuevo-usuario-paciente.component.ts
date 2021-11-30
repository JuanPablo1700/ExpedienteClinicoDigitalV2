import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-nuevo-usuario-paciente',
  templateUrl: './nuevo-usuario-paciente.component.html',
  styleUrls: ['./nuevo-usuario-paciente.component.css']
})
export class NuevoUsuarioPacienteComponent implements OnInit {

  user = {
    nombre: "",
    apeP: "",
    apeM: "",
    genero: "",
    fecha: "",
    curp: "",
    tipoSangre: "",
    estado: "",
    ciudad: "",
    cp: "",
    password: ""
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registrar() {
    this.authService.registrar(this.user)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }

}
