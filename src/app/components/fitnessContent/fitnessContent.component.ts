import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { GoalService } from 'src/app/services/goal.service';
import { ProgramService } from 'src/app/services/program.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-fitnessContent',
  templateUrl: './fitnessContent.component.html',
  styleUrls: ['./fitnessContent.component.css']
})
export class FitnessContentComponent implements OnInit {
  programs: Program[] = [];
  workouts: Workout[] = [];
  selectedProgram: Program | undefined;
  selectedWorkout: Workout | undefined;
  goalId: number = 1;

  constructor(private goalService: GoalService,
    private programService: ProgramService,
    private workoutService: WorkoutService) {}

  ngOnInit() {
    // Fetch all programs
    this.programService.getPrograms().subscribe((response) => {
      this.programs = response;
    });

    // Fetch all workouts
    this.workoutService.getWorkouts().subscribe((response) => {
      this.workouts = response;
    });
  }

  addProgramAndWorkoutToGoal() {
    //console.log('Button clicked');
    if (this.selectedProgram && this.selectedWorkout) {
      // Call the method to add the program and workout to the user's goal
        this.goalService.addProgramAndWorkoutToGoal(
        this.goalId,
        this.selectedProgram.programId,
        this.selectedWorkout.workoutId
      ).subscribe(() => {
        // Add success message here
        console.log('Program and workout added to goal successfully.');
      });
    }
  }

}
