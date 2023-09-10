import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessContentComponent } from './fitnessContent.component';

describe('ProgramComponent', () => {
  let component: FitnessContentComponent;
  let fixture: ComponentFixture<FitnessContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessContentComponent]
    });
    fixture = TestBed.createComponent(FitnessContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
