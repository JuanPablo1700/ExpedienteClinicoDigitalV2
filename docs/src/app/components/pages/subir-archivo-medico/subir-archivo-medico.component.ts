import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { listaArchivos } from 'src/models/listaArchivos';
import { Router } from "@angular/router";

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
    private fb: FormBuilder,
    private router: Router
  ) {
    this.archivosForm = this.fb.group({
      titulo: [''],
      tipoA: [''],
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
      tipoA: this.archivosForm.get('tipoA')?.value, 
      observacionesA: this.archivosForm.get('observacionesA')?.value
    }

    localStorage.setItem('titulo', archivo.titulo)
    localStorage.setItem('tipoA', archivo.tipoA) 
    localStorage.setItem('observacionesA', archivo.observacionesA)

    //agregar archivos al arreglo
    this.archivos.push(archivo)
    localStorage.setItem('listaArchivos', JSON.stringify(this.archivos))
  }

  obtenerVariables(){
    const archivo = {
      titulo: localStorage.getItem('titulo'),
      tipoA: localStorage.getItem('tipoA'),
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
  }

  guardarDiagnostico(){

    const diagnostico = {
      id_paciente: localStorage.getItem('id_paciente'),
      fechaActual: new Date(),
      Atendio: localStorage.getItem('nombreUsuario'),
      diagGeneral: localStorage.getItem('diagGeneral'),
      descrip: localStorage.getItem('descrip'),
      listaMedicamentos: JSON.parse(localStorage.getItem("listaMedicamentos") || '{}'),
      listaAntecedentes: JSON.parse(localStorage.getItem("listaAntecedentes") || '{}'),
      listaArchivos: JSON.parse(localStorage.getItem("listaArchivos") || '{}')
    }

    this.authService.guardarDiagnostico(diagnostico).subscribe({
      next: () => {
        this.router.navigate(['/historialMedicoPaciente']);
        this.limpiarDiagnostico();
      }, 
      error: (err) => console.log(err),
      complete:() => console.info('Complete')
    });

  }

  limpiarDiagnostico() {
    localStorage.removeItem('diagGeneral');
    localStorage.removeItem('descrip');
    localStorage.removeItem('nombreM');
    localStorage.removeItem('viaAdmon');
    localStorage.removeItem('frecuencia');
    localStorage.removeItem('duracion');
    localStorage.removeItem('notas');
    localStorage.removeItem('tipo');
    localStorage.removeItem('parentesco');
    localStorage.removeItem('observaciones');
    localStorage.removeItem('titulo');
    localStorage.removeItem('tipoA');
    localStorage.removeItem('observacionesA');
    localStorage.removeItem('listaArchivos');
    localStorage.removeItem('listaMedicamentos');
    localStorage.removeItem('listaAntecedentes');
  }

}
