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
    fechaNacimiento: Date,
    especialidad: String,
    clinica: String,
    universidad: String,
    password: String,
    cedula: Number
  }
  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.diagnosticoForm = this.fb.group({
      diagGeneral: [''],
      descrip: [''],
      peso: [''],
      altura: [''],
      alergia: ['']
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
      peso: this.diagnosticoForm.get('peso')?.value,
      altura: this.diagnosticoForm.get('altura')?.value,
      alergia: this.diagnosticoForm.get('alergia')?.value
    }

    localStorage.setItem('diagGeneral', diagnostico.diagGeneral)
    localStorage.setItem('descrip', diagnostico.descrip)
    localStorage.setItem('peso', diagnostico.peso)
    localStorage.setItem('altura', diagnostico.altura)
    localStorage.setItem('alergia', diagnostico.alergia)
  }


  obtenerVariables() {
      const diagnostico = {
      diagGeneral: localStorage.getItem('diagGeneral'),
      descrip: localStorage.getItem('descrip'),
      peso: localStorage.getItem('peso'),
      altura: localStorage.getItem('altura'),
      alergia: localStorage.getItem('alergia')
    }
    this.diagnosticoForm.setValue(diagnostico)

  }

  //obtener datos del médico 
  obtenerDatosMedico() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe(data => {
      console.log(data);
      this.datosMedico = data;
    }, error => {
      console.log(error);
    })
  }
}