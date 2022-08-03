import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion5EstudioComponent } from './sesion5-estudio.component';

describe('Sesion5EstudioComponent', () => {
  let component: Sesion5EstudioComponent;
  let fixture: ComponentFixture<Sesion5EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion5EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion5EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
