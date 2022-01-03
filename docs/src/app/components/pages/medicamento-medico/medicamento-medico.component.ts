import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListaMedicamentos } from 'src/models/listaMedicamentos'

@Component({
  selector: 'app-medicamento-medico',
  templateUrl: './medicamento-medico.component.html',
  styleUrls: ['./medicamento-medico.component.css']
})
export class MedicamentoMedicoComponent implements OnInit {
  medicamentoForm: FormGroup;

  medicamentos: ListaMedicamentos[] = [];

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
    this.medicamentoForm = this.fb.group({
      nombreM: [''],
      viaAdmon: [''],
      frecuencia: [''],
      duracion: [''],
      notas: ['']
    })
  }

  ngOnInit(): void {
    this.obtenerDatosMedico();
    this.obtenerVariables();
    this.obtenerDatosPaciente();
  }

  guardarMedicam() {
    if (!localStorage.getItem('listaMedicamentos')) {
      this.medicamentos = [];
    }
    
    const medicamento = {
      nombreM: this.medicamentoForm.get('nombreM')?.value,
      viaAdmon: this.medicamentoForm.get('viaAdmon')?.value,
      frecuencia: this.medicamentoForm.get('frecuencia')?.value,
      duracion: this.medicamentoForm.get('duracion')?.value,
      notas: this.medicamentoForm.get('notas')?.value
    }

    localStorage.setItem('nombreM', medicamento.nombreM)
    localStorage.setItem('viaAdmon', medicamento.viaAdmon)
    localStorage.setItem('frecuencia', medicamento.frecuencia)
    localStorage.setItem('duracion', medicamento.duracion)
    localStorage.setItem('notas', medicamento.notas)

    //agregar medicamento al arreglo  
    this.medicamentos.push(medicamento);
    localStorage.setItem("listaMedicamentos", JSON.stringify(this.medicamentos));
  }

  obtenerVariables() {
    const medicamento = {
      nombreM: localStorage.getItem('nombreM'),
      viaAdmon: localStorage.getItem('viaAdmon'),
      frecuencia: localStorage.getItem('frecuencia'),
      duracion: localStorage.getItem('duracion'),
      notas: localStorage.getItem('notas')
    }
    this.medicamentoForm.setValue(medicamento);

    //arreglo para tabla
    this.medicamentos = JSON.parse(localStorage.getItem("listaMedicamentos") || '{}')
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
    this.medicamentos.pop();
    localStorage.setItem("listaMedicamentos", JSON.stringify(this.medicamentos));    
    console.log(this.medicamentos);
  }

}
