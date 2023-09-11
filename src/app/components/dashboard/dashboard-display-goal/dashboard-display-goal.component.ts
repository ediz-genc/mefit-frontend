import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-display-goal',
  templateUrl: './dashboard-display-goal.component.html',
  styleUrls: ['./dashboard-display-goal.component.css']
})

export class DashboardDisplayGoalComponent implements OnInit{

  completedWorkoutsInGoal: Workout[] = []
  completedProgramsInGoal: Program[] = []
  pendingWorkoutsInGoal: Workout[] = []
  pendingProgramsInGoal: Program[] = []

  goal: Goal = {
    goalId: 0,
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

  completedPercentage: number = 0;
  

  constructor( private readonly loginService: LoginService,
    private readonly userService: UserService) {}

    userId: string = this.loginService.getTokenId();

  ngOnInit(): void {

    // Fetch goal
    this.userService.getCurrentGoal(this.userId).subscribe({next: (response: Goal) => {this.goal = response},
    error: (error: HttpErrorResponse) => console.log(error)})

    // Fetch completed workouts
    this.userService.getCompletedWorkouts(this.userId).subscribe({next: (response) => {this.completedWorkoutsInGoal = response}, 
    error: (error: HttpErrorResponse)=> console.log(error)
    })

    // Fetch completed programs
    this.userService.getCompletedPrograms(this.userId).subscribe({next: (response) => {this.completedProgramsInGoal = response}, 
    error: (error: HttpErrorResponse) => console.log(error)
    })

    // Fetch pending workouts
    this.userService.getPendingWorkouts(this.userId).subscribe({next: (response) =>{this.pendingWorkoutsInGoal = response}, 
    error: (error: HttpErrorResponse) => console.log(error)
    })

    // Fetch pending programs
    this.userService.getPendingPrograms(this.userId).subscribe({next: (response) =>{this.pendingProgramsInGoal = response}, 
      error: (error: HttpErrorResponse) => console.log(error)
    })

      //Get days left
    //this.daysLeft = this.userService.getDaysLeftUntilDate(this.goal.startDate);

    //Get completed percentage
    this.completedPercentage = this.calculateCompletedTotalPercentage();
  }

  completedWorkouts() : number {
    return this.completedWorkoutsInGoal.reduce((a, workout) => a + workout.exerciseIds.length, 0);
  }

  pendingWorkouts() : number {
    return this.pendingWorkoutsInGoal.reduce((a, workout) => a + workout.exerciseIds.length, 0);
  }

  completedPrograms() : number {
    return this.completedProgramsInGoal.reduce((a, program) => a + program.workouts.length, 0); 
  }

  pendingPrograms() : number {
    return this.pendingProgramsInGoal.reduce((a, program) => a + program.workouts.length, 0); 
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

  percentageToRadians(percentage: number) : number {
    return percentage * Math.PI / 100;
  }
}
