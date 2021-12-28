import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-principal-paciente',
  templateUrl: './principal-paciente.component.html',
  styleUrls: ['./principal-paciente.component.css']
})

export class PrincipalPacienteComponent implements OnInit {
  alturaForm: FormGroup;

  datosMedico = {
    nombre: "",
    fechaNacimiento: "",
    especialidad: "",
    clinica: "",
    universidad: "",
    cedula: "",
    genero: ""
  }
  
  usuario = {
    nombreMedico: localStorage.getItem('nombreUsuario')
  }

  datosPaciente = {
    nombre: '', 
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: '',
    fechaNacimiento: '',
    curp: '',
    tipoSangre: '',
    estado: '',
    ciudad: '',
    cp: '',
    password: '',
    altura: '',
    peso: '',
    alergias: ''
  }
  
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { 
    this.alturaForm = this.fb.group({
      altura: '',
      peso: '',
      alergias: ''
    })
   }

  ngOnInit(): void {
    if(localStorage.getItem('id')){
      this.obtenerDatosMedico();
    }
    this.obtenerDatosPaciente();
  }

  obtenerDatosMedico() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe({
      next: (data) => this.datosMedico = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  obtenerDatosPaciente() {
    this.authService.datosPaciente(localStorage.getItem('id_paciente')).subscribe({
      next: (data) => this.datosPaciente = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

  Actualizar() {
    const dataUpdate = {
      altura: this.alturaForm.get('altura')?.value,
      peso: this.alturaForm.get('peso')?.value,
      alergias: this.alturaForm.get('alergias')?.value
    }
    console.log(dataUpdate);

    this.authService.Actualizar(localStorage.getItem('id_paciente'),dataUpdate).subscribe({
      next: (newData) =>{
        this.datosPaciente = newData;
        this.alturaForm = this.fb.group({
          altura: '',
          peso: '',
          alergias: ''});
      },
      error: err => console.log(err),
      complete: () => console.info('complete')
    });
  }

}
