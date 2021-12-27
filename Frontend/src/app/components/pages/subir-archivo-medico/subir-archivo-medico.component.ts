import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { listaArchivos } from '../../../../../../Backend/src/models/listaArchivos';

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
    nombre: String
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.archivosForm = this.fb.group({
      titulo: [''],
      tipo: [''],
      observaciones: ['']
    })
   }

  ngOnInit(): void {
    this.obtenerDatosMedico();
    this.obtenerVariables();
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
    const archivo = {
      titulo: this.archivosForm.get('titulo')?.value,
       tipo: this.archivosForm.get('tipo')?.value, 
      observaciones: this.archivosForm.get('observaciones')?.value
    }

    localStorage.setItem('titulo', archivo.titulo)
     localStorage.setItem('tipo', archivo.tipo) 
    localStorage.setItem('observaciones', archivo.observaciones)

    console.log(archivo);
    //agregar archivos al arreglo
    this.archivos.push(archivo )
    localStorage.setItem('listaArchivos', JSON.stringify(this.archivos))
  }

  obtenerVariables(){
    const archivo = {
      titulo: localStorage.getItem('titulo'),
      tipo: localStorage.getItem('tipo'),
      observaciones: localStorage.getItem('observaciones')
    }
    this.archivosForm.setValue(archivo);

    //arreglo para tabla
    this.archivos = JSON.parse(localStorage.getItem("listaArchivos") || '{}')
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
