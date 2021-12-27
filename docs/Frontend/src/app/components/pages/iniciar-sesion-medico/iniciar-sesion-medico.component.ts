import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-iniciar-sesion-medico',
  templateUrl: './iniciar-sesion-medico.component.html',
  styleUrls: ['./iniciar-sesion-medico.component.css']
})
export class IniciarSesionMedicoComponent implements OnInit {

  medico = {
    correo: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesionMedico() {
    this.authService.iniciarSesionMedico(this.medico).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('nombreUsuario', res.nombreMedico);
        this.router.navigate(['/principalMedico']);
      },
      error: (err) => console.log(err),
      complete: () => console.info('Complete')
    });
  }

}