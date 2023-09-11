import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateGoalComponent } from './dashboard-create-goal.component';

describe('DashboardCreateGoalComponent', () => {
  let component: DashboardCreateGoalComponent;
  let fixture: ComponentFixture<DashboardCreateGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCreateGoalComponent]
    });
    fixture = TestBed.createComponent(DashboardCreateGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
