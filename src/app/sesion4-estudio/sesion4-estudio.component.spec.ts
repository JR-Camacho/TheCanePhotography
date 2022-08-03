import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion4EstudioComponent } from './sesion4-estudio.component';

describe('Sesion4EstudioComponent', () => {
  let component: Sesion4EstudioComponent;
  let fixture: ComponentFixture<Sesion4EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion4EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion4EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
