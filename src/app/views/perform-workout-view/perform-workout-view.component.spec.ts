import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformWorkoutViewComponent } from './perform-workout-view.component';

describe('PerformWorkoutViewComponent', () => {
  let component: PerformWorkoutViewComponent;
  let fixture: ComponentFixture<PerformWorkoutViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformWorkoutViewComponent]
    });
    fixture = TestBed.createComponent(PerformWorkoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
