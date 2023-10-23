import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicInfoComponent } from './patient-clinic-info.component';

describe('PatientClinicInfoComponent', () => {
  let component: PatientClinicInfoComponent;
  let fixture: ComponentFixture<PatientClinicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientClinicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientClinicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
