import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformWorkoutComponent } from './perform-workout.component';

describe('PerformWorkoutComponent', () => {
  let component: PerformWorkoutComponent;
  let fixture: ComponentFixture<PerformWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformWorkoutComponent]
    });
    fixture = TestBed.createComponent(PerformWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
