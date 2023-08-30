import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGoalHistoryItemComponent } from './profile-goal-history-item.component';

describe('ProfileGoalHistoryItemComponent', () => {
  let component: ProfileGoalHistoryItemComponent;
  let fixture: ComponentFixture<ProfileGoalHistoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileGoalHistoryItemComponent]
    });
    fixture = TestBed.createComponent(ProfileGoalHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
