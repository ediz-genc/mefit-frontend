

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Goal } from 'src/app/models/goal.model';
import { Program } from 'src/app/models/program.model';
import { User } from 'src/app/models/user.model';
import { Workout } from 'src/app/models/workout.model';
import { GoalService } from 'src/app/services/goal.service';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program.service';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

  
export class DashboardComponent implements OnInit{

  completedWorkoutsInGoal: Workout[] = []
  completedProgramsInGoal: Program[] = []
  pendingWorkoutsInGoal: Workout[] = []
  pendingProgramsInGoal: Program[] = []

  constructor(public readonly programService: ProgramService,
    private readonly loginService: LoginService,
    private readonly userService: UserService) {}

    userId: string = this.loginService.getTokenId();


  ngOnInit(): void {

    // Fetch goal
    

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
  }

}
