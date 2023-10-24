import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationClinicsCreationComponent } from './organization-clinics-creation.component';

describe('OrganizationClinicsCreationComponent', () => {
  let component: OrganizationClinicsCreationComponent;
  let fixture: ComponentFixture<OrganizationClinicsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationClinicsCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationClinicsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
