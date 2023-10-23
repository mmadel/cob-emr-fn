import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchdulerComponent } from './view-schduler.component';

describe('ViewSchdulerComponent', () => {
  let component: ViewSchdulerComponent;
  let fixture: ComponentFixture<ViewSchdulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSchdulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSchdulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
