import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionPacienteComponent } from './iniciar-sesion-paciente.component';

describe('IniciarSesionPacienteComponent', () => {
  let component: IniciarSesionPacienteComponent;
  let fixture: ComponentFixture<IniciarSesionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
