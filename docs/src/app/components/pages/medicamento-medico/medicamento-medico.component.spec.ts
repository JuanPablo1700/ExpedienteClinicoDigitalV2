import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoMedicoComponent } from './medicamento-medico.component';

describe('MedicamentoMedicoComponent', () => {
  let component: MedicamentoMedicoComponent;
  let fixture: ComponentFixture<MedicamentoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
