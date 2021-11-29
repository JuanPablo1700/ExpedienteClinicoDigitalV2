import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoMedicoComponent } from './diagnostico-medico.component';

describe('DiagnosticoMedicoComponent', () => {
  let component: DiagnosticoMedicoComponent;
  let fixture: ComponentFixture<DiagnosticoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
