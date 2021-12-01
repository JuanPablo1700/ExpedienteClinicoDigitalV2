import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-iniciar-sesion-paciente',
  templateUrl: './iniciar-sesion-paciente.component.html',
  styleUrls: ['./iniciar-sesion-paciente.component.css']
})
export class IniciarSesionPacienteComponent implements OnInit {

  user = {
    curp: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.authService.iniciarSesion(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/principalPaciente']);
        },
        err => console.log(err)
      )
  }

}
