import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorUserComponent } from './list-doctor-user.component';

describe('ListDoctorUserComponent', () => {
  let component: ListDoctorUserComponent;
  let fixture: ComponentFixture<ListDoctorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDoctorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
