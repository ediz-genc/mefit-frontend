import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessContentViewComponent } from './fitnessContent-view.component';

describe('ProfileComponent', () => {
  let component: FitnessContentViewComponent;
  let fixture: ComponentFixture<FitnessContentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessContentViewComponent]
    });
    fixture = TestBed.createComponent(FitnessContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
