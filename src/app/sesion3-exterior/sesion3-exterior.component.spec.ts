import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion3ExteriorComponent } from './sesion3-exterior.component';

describe('Sesion3ExteriorComponent', () => {
  let component: Sesion3ExteriorComponent;
  let fixture: ComponentFixture<Sesion3ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion3ExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesion3ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
