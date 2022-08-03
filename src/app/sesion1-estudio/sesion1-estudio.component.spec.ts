import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion1EstudioComponent } from './sesion1-estudio.component';

describe('Sesion1EstudioComponent', () => {
  let component: Sesion1EstudioComponent;
  let fixture: ComponentFixture<Sesion1EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion1EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion1EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
