import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContactInfoComponent } from './patient-contact-info.component';

describe('PatientContactInfoComponent', () => {
  let component: PatientContactInfoComponent;
  let fixture: ComponentFixture<PatientContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientContactInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
