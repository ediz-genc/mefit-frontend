import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { Goal } from 'src/app/models/goal.model';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { GoalService } from 'src/app/services/goal.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-display-goal',
  templateUrl: './dashboard-display-goal.component.html',
  styleUrls: ['./dashboard-display-goal.component.css']
})

export class DashboardDisplayGoalComponent implements OnInit{

  completedWorkoutsInGoal: any[] = []
  completedProgramsInGoal: any[] = []
  pendingWorkoutsInGoal: any[] = []
  pendingProgramsInGoal: any[] = []

  goal: Goal = {
    id: 0,
    name: '',
    startDate: '',
    endDate: '',
    completed: false,
    userId: '',
    programs: [],
    completedProgramId: [],
    workoutId: [],
    completedWorkoutId: [],
  }
  daysLeft: number = 0

  numberOfCompletedExercises: number = 0;
  numberOfPendingExercises: number = 0;
  numberOfCompletedPrograms: number = 0;
  numberOfPendingPrograms: number = 0;

  totalCompletedPercentage: number = 0;
  

  constructor( 
    private readonly loginService: LoginService,
    private readonly userService: UserService, 
    private readonly goalService: GoalService,
    private readonly router: Router) {}

    userId: string = this.loginService.getTokenId();


  sources = [
    this.userService.getCurrentGoal(this.userId),
    this.userService.getCompletedWorkouts(this.userId),
    this.userService.getCompletedPrograms(this.userId),
    this.userService.getPendingWorkouts(this.userId),
    this.userService.getPendingPrograms(this.userId)
  ] 

  ngOnInit(): void {

    forkJoin(this.sources).pipe(map(([currentGoal, completedWorkouts, completedPrograms, pendingWorkouts, pendingPrograms]) => ({
      currentGoal, completedWorkouts, completedPrograms, pendingWorkouts, pendingPrograms
    }))).subscribe({
      next: (response) => {
        this.goal = response.currentGoal;
        this.completedWorkoutsInGoal = response.completedWorkouts;
        this.completedProgramsInGoal = response.completedPrograms;
        this.pendingWorkoutsInGoal = response.pendingWorkouts;
        this.pendingProgramsInGoal = response.pendingPrograms;
      }, error: (error: HttpErrorResponse) => console.log(error), 
      complete: () => {
        this.totalCompletedPercentage = this.calculateCompletedProgramsPercentage();
        this.daysLeft = this.userService.getDaysLeftUntilDate(this.goal.endDate!);
      }})
  }

  completedWorkouts() : number {
    return this.completedWorkoutsInGoal.reduce((a, workout) => a + workout.exerciseIds.length, 0);
  }

  pendingWorkouts() : number {
    return this.pendingWorkoutsInGoal.reduce((a, workout) => a + workout.exerciseIds.length, 0);
  }

  completedPrograms() : number {
    return this.completedProgramsInGoal.reduce((a, program) => a + program.workoutId.length, 0); 
  }

  pendingPrograms() : number {
    return this.pendingProgramsInGoal.reduce((a, program) => a + program.workoutId.length, 0); 
  }

  calculateCompletedWorkoutsPercentage() : number {
    let completedWorkouts = this.completedWorkouts();
    let totalWorkouts = this.pendingWorkouts() + completedWorkouts;
    let completedPercentage = completedWorkouts / totalWorkouts * 100;
    return completedPercentage;
  }

  calculateCompletedProgramsPercentage() : number {
    let completedPrograms = this.completedPrograms();
    let totalPrograms = this.pendingPrograms() + completedPrograms;
    let completedPercentage = completedPrograms / totalPrograms * 100;
    return completedPercentage;
  }

  calculateCompletedTotalPercentage() : number {
    let completedWorkouts = this.completedWorkouts();
    let completedPrograms = this.completedPrograms();

    let totalWorkouts = this.pendingWorkouts() + completedWorkouts;
    let totalPrograms = this.pendingPrograms() + completedPrograms;

    let completedPercentage = (completedWorkouts + completedPrograms) / (totalWorkouts + totalPrograms) * 100;
    return completedPercentage;
  }

  // Should fire when all programs and workouts in goal are completed
  completeGoal():void {
    this.goalService.completeGoal(this.goal.id, this.goal).subscribe(
      {
        error: (error: HttpErrorResponse) => console.log(error), 
        complete: () => {
          this.goal.completed = true;
          this.userService.completeGoalByUser(this.userId).subscribe({
            complete: () => {this.router.navigate(['/dashboard'])}
          })
        }
      }
    )
  }
  
  // Should move pending workout to completed workout
  completeWorkout(workoutId: number): void {
    this.goalService.completeWorkout(this.userId, workoutId).subscribe({
      next: (response) => this.goal = response,
      error: (error: HttpErrorResponse) => console.log(error),
      complete: () => {
        this.ngOnInit();
      }
    })
  }

  // Should move pending program to completed program
  completeProgram(programId: number): void {
    this.goalService.completeProgram(this.userId, programId).subscribe({
      next: (response) => this.goal = response,
      error: (error: HttpErrorResponse) => console.log(error),
      complete: () => {
        this.ngOnInit();
      }
    })
  }
}
