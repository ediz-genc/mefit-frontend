import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from 'src/app/services/goal.service';
import { LoginService } from 'src/app/services/login.service';
import { PerformWorkoutService } from 'src/app/services/perform-workout.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-perform-workout',
  templateUrl: './perform-workout.component.html',
  styleUrls: ['./perform-workout.component.css']
})
export class PerformWorkoutComponent {
  
    constructor(
      private readonly performWorkoutService: PerformWorkoutService, 
      private readonly workoutService: WorkoutService,
      private router: Router,
      private readonly goalService: GoalService,
      private readonly loginService: LoginService
      ) {}

    public userId: String = this.loginService.getTokenId()
    public workoutId: number = this.performWorkoutService.getWorkoutId();

    public workouts: any[] = [];
    public workout: any = [];
    public exercises: any[] = [];

    
    ngOnInit(): void {
      this.workoutService.getWorkoutsWithExercises().subscribe({
        next: (workouts) => this.workouts = workouts,
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => {
          this.workout = this.workouts.find((workout: any) => workout.id === this.workoutId)
          this.exercises = this.workout.exercises;
          }
      });
    }

    completeWorkout(): void {
      this.goalService.completeWorkout(this.userId, this.workoutId).subscribe({
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => {
          this.router.navigateByUrl('/dashboard');
        }
      })
    }

    
}
