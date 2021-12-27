import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buscar-paciente-medico',
  templateUrl: './buscar-paciente-medico.component.html',
  styleUrls: ['./buscar-paciente-medico.component.css']
})
export class BuscarPacienteMedicoComponent implements OnInit {
  searchForm: FormGroup;

  usuario = {
    nombreMedico: localStorage.getItem('nombreUsuario')
  } 

  datosPaciente = [{ 
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    genero: '',
    tipoSangre: '',
    curp: '',
    _id: ''
  }];

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      curp: ['']
    })
   }

  ngOnInit(): void { }

  buscarPaciente() {
    this.authService.buscarPaciente(this.searchForm.get('curp')?.value).subscribe({
      next: (data) => {
        this.datosPaciente = data.user;
        localStorage.setItem('id_paciente', this.datosPaciente[0]._id );
      },
      error: (error) => console.log(error),
      complete: () => console.info('Complete')
    });
  }

}