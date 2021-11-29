import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.user);
  }

}
