

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { GoalService } from 'src/app/services/goal.service';
import { ProgramService } from 'src/app/services/program.service';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

  
export class DashboardComponent implements OnInit{

  constructor(public readonly userService: UserService, private programService: ProgramService,
    private workoutService: WorkoutService, private goalService: GoalService) {}

    completedProgramsInGoal: Program[] = []
    completedWorkoutsInGoal: Workout[] = []

  ngOnInit(): void {
    // this.userService.getCurrentUser()
    //     // Fetch completed workouts
    //     this.goalService.getCompletedWorkouts().subscribe((response) => {
    //       this.completedWorkoutsInGoal = response;
    //     })

    //     this.goalService.getCompletedPrograms(this.userService.getCurrentUser().id).subscribe((response) =>{
    //       this.completedWorkoutsInGoal = response
    //     })
  }


  getUsers() {
    // this.userService.getUser().subscribe({
    //   next: (data) => console.log(data), 
    //   error: (error:HttpErrorResponse) => console.log(error)
    // })
  }

}
