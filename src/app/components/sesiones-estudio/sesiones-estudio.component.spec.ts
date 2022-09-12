import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesEstudioComponent } from './sesiones-estudio.component';

describe('SesionesEstudioComponent', () => {
  let component: SesionesEstudioComponent;
  let fixture: ComponentFixture<SesionesEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
