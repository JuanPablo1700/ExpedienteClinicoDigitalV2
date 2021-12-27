import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesMedicoComponent } from './antecedentes-medico.component';

describe('AntecedentesMedicoComponent', () => {
  let component: AntecedentesMedicoComponent;
  let fixture: ComponentFixture<AntecedentesMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentesMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
