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
    id: "",
    curp: "",
    password: ""
  }

  correcto = true; //variable para saber si está mal una contraseña
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    
    this.authService.iniciarSesion(this.user).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id_paciente', res.id);
        this.router.navigate(['/principalPaciente']);
        this.correcto = true;
      },
      error: (err) => {
        console.log(err);
        this.correcto = false;
      },
      complete: () => console.info('Complete')
    });
  }

}
