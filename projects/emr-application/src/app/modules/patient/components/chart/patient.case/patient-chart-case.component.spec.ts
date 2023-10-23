import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartCaseComponent } from './patient-chart-case.component';

describe('PatientChartCaseComponent', () => {
  let component: PatientChartCaseComponent;
  let fixture: ComponentFixture<PatientChartCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientChartCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientChartCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
