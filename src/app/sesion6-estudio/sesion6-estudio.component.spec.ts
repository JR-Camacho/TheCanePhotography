import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion6EstudioComponent } from './sesion6-estudio.component';

describe('Sesion6EstudioComponent', () => {
  let component: Sesion6EstudioComponent;
  let fixture: ComponentFixture<Sesion6EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion6EstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion6EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
