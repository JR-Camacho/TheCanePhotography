import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion2ExteriorComponent } from './sesion2-exterior.component';

describe('Sesion2ExteriorComponent', () => {
  let component: Sesion2ExteriorComponent;
  let fixture: ComponentFixture<Sesion2ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion2ExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion2ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
