import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion4ExteriorComponent } from './sesion4-exterior.component';

describe('Sesion4ExteriorComponent', () => {
  let component: Sesion4ExteriorComponent;
  let fixture: ComponentFixture<Sesion4ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion4ExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion4ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
