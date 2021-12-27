import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionMedicoComponent } from './iniciar-sesion-medico.component';

describe('IniciarSesionMedicoComponent', () => {
  let component: IniciarSesionMedicoComponent;
  let fixture: ComponentFixture<IniciarSesionMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
