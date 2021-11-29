import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSeleccionadaComponent } from './consulta-seleccionada.component';

describe('ConsultaSeleccionadaComponent', () => {
  let component: ConsultaSeleccionadaComponent;
  let fixture: ComponentFixture<ConsultaSeleccionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSeleccionadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
