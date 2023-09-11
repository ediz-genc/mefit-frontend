import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { ExerciseService } from 'src/app/services/exercise.service';
import { GoalService } from 'src/app/services/goal.service';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-dashboard-create-goal',
  templateUrl: './dashboard-create-goal.component.html',
  styleUrls: ['./dashboard-create-goal.component.css']
})
export class DashboardCreateGoalComponent{

  goal: Goal = {
    goalId: 0,
    name: '',
    startDate: '',
    endDate: '',
    completed: false,
    userId: 0,
    programs: [],
    completedProgramId: [],
    workoutId: [],
    completedWorkoutId: [],
  }

  constructor(private readonly goalService: GoalService, 
    private readonly workoutService: WorkoutService, 
    private readonly userService: UserService, 
    private readonly exerciseService: ExerciseService ){}

  ngOnInit(): void {
      
    
  }
}
