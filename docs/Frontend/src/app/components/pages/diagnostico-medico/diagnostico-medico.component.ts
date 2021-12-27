import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-diagnostico-medico',
  templateUrl: './diagnostico-medico.component.html',
  styleUrls: ['./diagnostico-medico.component.css']
})
export class DiagnosticoMedicoComponent implements OnInit {
  diagnosticoForm: FormGroup;

  datosMedico = {
    nombre: String,
    fechaNacimiento: String,
    especialidad: String,
    clinica: String,
    universidad: String,
    password: String,
    cedula: Number,
    genero: String
  }
  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.diagnosticoForm = this.fb.group({
      diagGeneral: [''],
      descrip: ['']
    })
  }

  ngOnInit(): void {
    this.obtenerDatosMedico();
    this.obtenerVariables();
    
  }

  //guardar los datos en localStorage
  guardarDiag() {
    const diagnostico = {
      diagGeneral: this.diagnosticoForm.get('diagGeneral')?.value,
      descrip: this.diagnosticoForm.get('descrip')?.value,
    }

    localStorage.setItem('diagGeneral', diagnostico.diagGeneral)
    localStorage.setItem('descrip', diagnostico.descrip)
  }


  obtenerVariables() {
      const diagnostico = {
      diagGeneral: localStorage.getItem('diagGeneral'),
      descrip: localStorage.getItem('descrip'),
    }
    this.diagnosticoForm.setValue(diagnostico)

  }

  //obtener datos del médico 
  obtenerDatosMedico() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe({
      next: (data) => this.datosMedico = data,
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }
}