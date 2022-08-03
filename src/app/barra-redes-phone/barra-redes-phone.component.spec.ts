import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRedesPhoneComponent } from './barra-redes-phone.component';

describe('BarraRedesPhoneComponent', () => {
  let component: BarraRedesPhoneComponent;
  let fixture: ComponentFixture<BarraRedesPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraRedesPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraRedesPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
