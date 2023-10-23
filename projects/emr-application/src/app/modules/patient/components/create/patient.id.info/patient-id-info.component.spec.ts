import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdInfoComponent } from './patient-id-info.component';

describe('PatientIdInfoComponent', () => {
  let component: PatientIdInfoComponent;
  let fixture: ComponentFixture<PatientIdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientIdInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientIdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
