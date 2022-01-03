import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ListaAntecedentes } from 'src/models/listaAntecedentes'

@Component({
  selector: 'app-antecedentes-medico',
  templateUrl: './antecedentes-medico.component.html',
  styleUrls: ['./antecedentes-medico.component.css']
})
export class AntecedentesMedicoComponent implements OnInit {
  antescedentesForm: FormGroup;

  antecedentes: ListaAntecedentes[] = [];

  datosMedico = {
    nombre: '',
    fechaNacimiento: '',
    especialidad: '',
    clinica: '',
    universidad: '',
    password: '',
    cedula: '',
    genero: ''
  }

  datosPaciente = {
    nombre: '', 
    apellidoPaterno: '',
    apellidoMaterno: ''
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
    this.obtenerDatosMedico();
    this.obtenerVariables();
    this.obtenerDatosPaciente();
  }

  guardarAntescedentes(){
    if (!localStorage.getItem('listaAntecedentes')) {
      this.antecedentes = [];
    }

    const antescedente = {
      tipo: this.antescedentesForm.get('tipo')?.value,
      parentesco: this.antescedentesForm.get('parentesco')?.value,
      observaciones: this.antescedentesForm.get('observaciones')?.value,
    }

    localStorage.setItem('tipo', antescedente.tipo)
    localStorage.setItem('parentesco', antescedente.parentesco)
    localStorage.setItem('observaciones', antescedente.observaciones)

      //agregar antecedentes al arreglo  
      this.antecedentes.push(antescedente);
      localStorage.setItem("listaAntecedentes", JSON.stringify(this.antecedentes));
  }

  obtenerVariables(){
    const diagnostico = {
      tipo: localStorage.getItem('tipo'),
      parentesco: localStorage.getItem('parentesco'),
      observaciones: localStorage.getItem('observaciones'),
    }
    this.antescedentesForm.setValue(diagnostico);

    //arreglo para tabla
    this.antecedentes = JSON.parse(localStorage.getItem("listaAntecedentes") || '{}')
  }

  //obtener datos del médico 
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

  eliminarUltimo() {
    this.antecedentes.pop();
    localStorage.setItem("listaAntecedentes", JSON.stringify(this.antecedentes));
  }

}