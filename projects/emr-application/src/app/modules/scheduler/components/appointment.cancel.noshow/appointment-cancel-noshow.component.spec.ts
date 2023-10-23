import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCancelNoshowComponent } from './appointment-cancel-noshow.component';

describe('AppointmentCancelNoshowComponent', () => {
  let component: AppointmentCancelNoshowComponent;
  let fixture: ComponentFixture<AppointmentCancelNoshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCancelNoshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCancelNoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
