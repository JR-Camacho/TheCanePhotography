import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion2EstudioComponent } from './sesion2-estudio.component';

describe('Sesion2EstudioComponent', () => {
  let component: Sesion2EstudioComponent;
  let fixture: ComponentFixture<Sesion2EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion2EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion2EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
