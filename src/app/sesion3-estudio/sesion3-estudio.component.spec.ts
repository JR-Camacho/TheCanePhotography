import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion3EstudioComponent } from './sesion3-estudio.component';

describe('Sesion3EstudioComponent', () => {
  let component: Sesion3EstudioComponent;
  let fixture: ComponentFixture<Sesion3EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion3EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion3EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
