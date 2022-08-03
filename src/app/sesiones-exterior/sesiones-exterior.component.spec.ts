import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesExteriorComponent } from './sesiones-exterior.component';

describe('SesionesExteriorComponent', () => {
  let component: SesionesExteriorComponent;
  let fixture: ComponentFixture<SesionesExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
