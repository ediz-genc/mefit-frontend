import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDisplayGoalComponent } from './dashboard-display-goal.component';

describe('DashboardDisplayGoalComponent', () => {
  let component: DashboardDisplayGoalComponent;
  let fixture: ComponentFixture<DashboardDisplayGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDisplayGoalComponent]
    });
    fixture = TestBed.createComponent(DashboardDisplayGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
