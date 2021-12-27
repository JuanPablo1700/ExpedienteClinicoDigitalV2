import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioPacienteComponent } from './nuevo-usuario-paciente.component';

describe('NuevoUsuarioPacienteComponent', () => {
  let component: NuevoUsuarioPacienteComponent;
  let fixture: ComponentFixture<NuevoUsuarioPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
