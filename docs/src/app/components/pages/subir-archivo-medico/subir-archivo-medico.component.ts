import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { listaArchivos } from 'src/models/listaArchivos';

@Component({
  selector: 'app-subir-archivo-medico',
  templateUrl: './subir-archivo-medico.component.html',
  styleUrls: ['./subir-archivo-medico.component.css']
})
export class SubirArchivoMedicoComponent implements OnInit {
  archivosSubidos: Array<File> = [];
  archivos: listaArchivos[] = [];
  archivosForm: FormGroup;

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
    this.archivosForm = this.fb.group({
      titulo: [''],
      tipo: [''],
      observacionesA: ['']
    })
   }

  ngOnInit(): void {
    this.obtenerDatosMedico();
    this.obtenerVariables();
    this.obtenerDatosPaciente();
  }

  subirArchivo(){
    let formData = new FormData();
    for (let i = 0; i < this.subirArchivo.length; i++){
      formData.append("subidos[]", this.archivosSubidos[i], this.archivosSubidos[i].name);
    }
  }
  cambioArchivo(e: any){
    this.subirArchivo = e.target.files;
  }

  guardarArchivos(){
    if (!localStorage.getItem('listaArchivos')) {
      this.archivos = [];
    }

    const archivo = {
      titulo: this.archivosForm.get('titulo')?.value,
      tipo: this.archivosForm.get('tipo')?.value, 
      observacionesA: this.archivosForm.get('observacionesA')?.value
    }

    localStorage.setItem('titulo', archivo.titulo)
    localStorage.setItem('tipo', archivo.tipo) 
    localStorage.setItem('observacionesA', archivo.observacionesA)

    //agregar archivos al arreglo
    this.archivos.push(archivo)
    localStorage.setItem('listaArchivos', JSON.stringify(this.archivos))
  }

  obtenerVariables(){
    const archivo = {
      titulo: localStorage.getItem('titulo'),
      tipo: localStorage.getItem('tipo'),
      observacionesA: localStorage.getItem('observacionesA')
    }
    this.archivosForm.setValue(archivo);

    //arreglo para tabla
    this.archivos = JSON.parse(localStorage.getItem("listaArchivos") || '{}')
  }

  //obtener datos del médico 
  obtenerDatosMedico() {
    this.authService.datosMedico(localStorage.getItem('id')).subscribe({
      next: (data) => this.datosMedico = data,
      error: error => console.log(error),
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
    this.archivos.pop();
    localStorage.setItem("listaArchivos", JSON.stringify(this.archivos));    
    console.log(this.archivos);
  }

}
