import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario-paciente',
  templateUrl: './nuevo-usuario-paciente.component.html',
  styleUrls: ['./nuevo-usuario-paciente.component.css']
})
export class NuevoUsuarioPacienteComponent implements OnInit {
  pacienteForm: FormGroup;

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
    private router: Router,
    private fb: FormBuilder
  ) {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apePat: ['', Validators.required],
      apeMat: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNac: ['', Validators.required],
      curp: ['', (Validators.minLength(18), Validators.required)],
      tipoSangre: ['', Validators.required],
      estado: ['', Validators.required],
      ciudad: ['', Validators.required],
      cp: ['', Validators.required],
      password: ['', (Validators.minLength(8), Validators.required)],
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const user = {
      nombre: this.pacienteForm.get('nombre')?.value,
      apellidoPaterno: this.pacienteForm.get('apePat')?.value,
      apellidoMaterno: this.pacienteForm.get('apeMat')?.value,
      genero: this.pacienteForm.get('genero')?.value,
      fechaNacimiento: this.pacienteForm.get('fechaNac')?.value,
      curp: this.pacienteForm.get('curp')?.value,
      tipoSangre: this.pacienteForm.get('tipoSangre')?.value,
      estado: this.pacienteForm.get('estado')?.value,
      ciudad: this.pacienteForm.get('ciudad')?.value,
      cp: this.pacienteForm.get('cp')?.value,
      password: this.pacienteForm.get('password')?.value,
    }

    this.authService.registrar(user).subscribe(data => {
      console.log(data)
      this.router.navigate(['/iniciarSesionPaciente']);
    }, error => {
      console.log(error)

    })
  }

}
