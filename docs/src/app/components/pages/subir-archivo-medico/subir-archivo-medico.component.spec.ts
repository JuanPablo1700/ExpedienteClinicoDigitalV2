import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirArchivoMedicoComponent } from './subir-archivo-medico.component';

describe('SubirArchivoMedicoComponent', () => {
  let component: SubirArchivoMedicoComponent;
  let fixture: ComponentFixture<SubirArchivoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirArchivoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirArchivoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
