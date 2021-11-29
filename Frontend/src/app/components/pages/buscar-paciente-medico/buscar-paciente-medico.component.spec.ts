import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPacienteMedicoComponent } from './buscar-paciente-medico.component';

describe('BuscarPacienteMedicoComponent', () => {
  let component: BuscarPacienteMedicoComponent;
  let fixture: ComponentFixture<BuscarPacienteMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPacienteMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPacienteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
