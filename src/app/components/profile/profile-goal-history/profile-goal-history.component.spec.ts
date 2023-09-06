import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGoalHistoryComponent } from './profile-goal-history.component';

describe('ProfileGoalHistoryComponent', () => {
  let component: ProfileGoalHistoryComponent;
  let fixture: ComponentFixture<ProfileGoalHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileGoalHistoryComponent]
    });
    fixture = TestBed.createComponent(ProfileGoalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
