import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-antecedentes-medico',
  templateUrl: './antecedentes-medico.component.html',
  styleUrls: ['./antecedentes-medico.component.css']
})
export class AntecedentesMedicoComponent implements OnInit {
  antescedentesForm: FormGroup;

  datosMedico = {
    nombre: String
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { 
    this.antescedentesForm = this.fb.group({
      tipo: [''],
      parentesco: [''],
      observaciones: ['']
    })
  }

  ngOnInit(): void {
    
  }

  guardarAntescedentes(){
    const antescedente = {
      tipo: this.antescedentesForm.get('tipo')?.value,
      parentesco: this.antescedentesForm.get('parentesco')?.value,
      observaciones: this.antescedentesForm.get('observaciones')?.value,
    }

    localStorage.setItem('tipo', antescedente.tipo)
    localStorage.setItem('parentesco', antescedente.parentesco)
    localStorage.setItem('observaciones', antescedente.observaciones)
  }

  obtenerVariables(){
    const diagnostico = {
      tipo: localStorage.getItem('tipo'),
      parentesco: localStorage.getItem('parentesco'),
      observaciones: localStorage.getItem('observaciones'),
    }
    this.antescedentesForm.setValue(diagnostico);
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