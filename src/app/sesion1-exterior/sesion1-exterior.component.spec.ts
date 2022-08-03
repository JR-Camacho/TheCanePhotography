import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion1ExteriorComponent } from './sesion1-exterior.component';

describe('Sesion1ExteriorComponent', () => {
  let component: Sesion1ExteriorComponent;
  let fixture: ComponentFixture<Sesion1ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion1ExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion1ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
