import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEmergencyInfoComponent } from './patient-emergency-info.component';

describe('PatientEmergencyInfoComponent', () => {
  let component: PatientEmergencyInfoComponent;
  let fixture: ComponentFixture<PatientEmergencyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEmergencyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEmergencyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
