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
  
  usuario = {
    nombreMedico: localStorage.getItem('nombreUsuario')
  }

  datos = {
    nombre: String, 
    apellidoPaterno: String,
    apellidoMaterno: String,
    genero: String,
    fechaNacimiento: String,
    curp: String,
    tipoSangre:String,
    estado: String,
    ciudad: String,
    cp: Number,
    password: String,
    altura: Number,
    peso: Number,
    alergias: String
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
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.authService.datosPaciente(localStorage.getItem('id_paciente')).subscribe({
      next: (data) => this.datos = data,
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
        this.datos = newData;
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
