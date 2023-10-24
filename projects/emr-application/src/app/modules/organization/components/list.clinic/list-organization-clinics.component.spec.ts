import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganizationClinicsComponent } from './list-organization-clinics.component';

describe('ListOrganizationClinicsComponent', () => {
  let component: ListOrganizationClinicsComponent;
  let fixture: ComponentFixture<ListOrganizationClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrganizationClinicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrganizationClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
