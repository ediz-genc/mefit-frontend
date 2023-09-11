import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { Goal } from 'src/app/models/goal.model';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { ExerciseService } from 'src/app/services/exercise.service';
import { GoalService } from 'src/app/services/goal.service';
import { ProgramService } from 'src/app/services/program.service';
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
    private readonly exerciseService: ExerciseService,
    private readonly programService: ProgramService ){}

    programs: Program[] = []
    workouts: Workout[] = []
    exercises: Exercise[] = []

    selectedPrograms: Program[] = []
    selectedWorkouts: Workout[] = []
    selectedExercises: Exercise[] = []

    programIds: number[] = []
    workoutsIds: number[] = []
    exercisesIds: number[] = []

    selectedProgram: Program | null = null
    selectedWorkout: Workout | null = null
    selectedExercise: Exercise | null = null
    goalId: number = 1;

  ngOnInit(): void {
    
    //Fetch all exercises
    this.exerciseService.getExercises().subscribe((response) => {
      this.exercises = response;
    })

    //Fetch all programs
    this.programService.getPrograms().subscribe((response) => {
      this.programs = response;
      console.log(response)
    });

    // Fetch all workouts
    this.workoutService.getWorkouts().subscribe((response) => {
      this.workouts = response;
    });
    
  }

  addExerciseToWorkout(){
    if (this.selectedExercise) {
      this.selectedExercises.push(this.selectedExercise);
      this.exercises = this.exercises.filter(exercise => exercise !== this.selectedExercise);
      this.selectedExercise = null;
    }
  }

  removeExerciseFromWorkout(){
    if (this.selectedExercise) {
      this.selectedExercises.push(this.selectedExercise);
      this.exercises = this.exercises.filter(exercise => exercise !== this.selectedExercise);
      this.selectedExercise = null;
    }
  }

  addProgramToGoal(){
    console.log(this.selectedProgram)
    if (this.selectedProgram) {
      this.selectedPrograms.push(this.selectedProgram);
      this.programs = this.programs.filter(program => program !== this.selectedProgram);
      this.selectedProgram = null;
    }
  }

  removeProgramFromGoal(){
    
  }

  addWorkoutToGoal(){
    console.log(this.selectedWorkout)
    if (this.selectedWorkout) {
      this.selectedWorkouts.push(this.selectedWorkout);
      this.workouts = this.workouts.filter(workout => workout !== this.selectedWorkout);
      this.selectedWorkout = null;
    }
  }

  removeWorkoutFromGoal(){

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
