import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministratorDoctorComponent } from './create-administrator-doctor.component';

describe('CreateAdministratorDoctorComponent', () => {
  let component: CreateAdministratorDoctorComponent;
  let fixture: ComponentFixture<CreateAdministratorDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdministratorDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdministratorDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
