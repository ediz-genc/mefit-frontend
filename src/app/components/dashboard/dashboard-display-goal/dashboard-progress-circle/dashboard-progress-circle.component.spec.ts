import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressCircleComponent } from './dashboard-progress-circle.component';

describe('DashboardProgressCircleComponent', () => {
  let component: DashboardProgressCircleComponent;
  let fixture: ComponentFixture<DashboardProgressCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProgressCircleComponent]
    });
    fixture = TestBed.createComponent(DashboardProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
