import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCaseInfoComponent } from './patient-case-info.component';

describe('PatientCaseInfoComponent', () => {
  let component: PatientCaseInfoComponent;
  let fixture: ComponentFixture<PatientCaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCaseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
