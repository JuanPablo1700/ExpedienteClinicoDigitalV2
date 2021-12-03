import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nuevo-usuario-paciente',
  templateUrl: './nuevo-usuario-paciente.component.html',
  styleUrls: ['./nuevo-usuario-paciente.component.css']
})
export class NuevoUsuarioPacienteComponent implements OnInit {

  user = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    genero: "",
    fechaNacimiento: "",
    curp: "",
    tipoSangre: "",
    estado: "",
    ciudad: "",
    cp: "",
    password: ""
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registrar() {
    this.authService.registrar(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('curp', res.curp);
          this.router.navigate(['/principalPaciente']);
        },
        err => console.log(err)
      )
  }

}
