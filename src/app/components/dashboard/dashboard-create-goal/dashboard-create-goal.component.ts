import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { Goal } from 'src/app/models/goal.model';
import { Program } from 'src/app/models/program.model';
import { Workout } from 'src/app/models/workout.model';
import { ExerciseService } from 'src/app/services/exercise.service';
import { GoalService } from 'src/app/services/goal.service';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program.service';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-dashboard-create-goal',
  templateUrl: './dashboard-create-goal.component.html',
  styleUrls: ['./dashboard-create-goal.component.css']
})
export class DashboardCreateGoalComponent{

  // goal: Goal = {
  //   goalId: 0,
  //   name: '',
  //   startDate: '',
  //   endDate: '',
  //   completed: false,
  //   userId: 0,
  //   programs: [],
  //   completedProgramId: [],
  //   workoutId: [],
  //   completedWorkoutId: [],
  // }

  constructor(private readonly goalService: GoalService, 
    private readonly workoutService: WorkoutService, 
    private readonly loginService: LoginService, 
    private readonly exerciseService: ExerciseService,
    private readonly programService: ProgramService,
    private readonly userService: UserService){}

    userId: string = this.loginService.getTokenId();

    //Fetched data
    programs: Program[] = []
    workouts: Workout[] = []
    exercises: Exercise[] = []

    //Lists with selected objects
    selectedPrograms: any[] = []
    selectedWorkouts: any[] = []
    selectedExercises: any[] = []

    //Lists with ids
    programIds: number[] = []
    workoutsIds: number[] = []
    exercisesIds: number[] = []

    //Selected objects
    selectedProgram: any
    selectedWorkout: any
    selectedExercise: any

    //Workout bindings
    workoutName: string | undefined
    workoutDescription: string | undefined

    //Goal bindings
    goalName: string | undefined
    goalDescription: string | undefined
    startDate: string | undefined
    endDate: string | undefined

  ngOnInit(): void {
    
    //Fetch all exercises
    this.exerciseService.getExercises().subscribe((response) => {
      this.exercises = response;
      console.log(response)
    })

    //Fetch all programs
    this.programService.getPrograms().subscribe((response) => {
      this.programs = response;
      console.log(response)
    });

    // Fetch all workouts
    this.workoutService.getWorkouts().subscribe((response) => {
      this.workouts = response;
      console.log(response)
    });
    
  }

  addExerciseToWorkout(){
    if (this.selectedExercise) {
      this.selectedExercises.push(this.selectedExercise);
      this.exercises = this.exercises.filter(exercise => exercise !== this.selectedExercise);
      this.selectedExercise = null;
    }
    console.log(this.selectedExercises)

  }

  removeExerciseFromWorkout(exercise: Exercise){
    const index = this.selectedExercises.indexOf(exercise);
    if (index !== -1) {
      this.selectedExercises.splice(index, 1);
      this.exercises.push(exercise);
    }
    console.log(this.selectedExercises)
  }

  addProgramToGoal(){
    console.log(this.selectedPrograms)
    if (this.selectedProgram) {
      this.selectedPrograms.push(this.selectedProgram);
      this.programs = this.programs.filter(program => program !== this.selectedProgram);
      this.selectedProgram = null;
    }
  }

  removeProgramFromGoal(program: Program){
    const index = this.selectedPrograms.indexOf(program);
    if (index !== -1) {
      this.selectedPrograms.splice(index, 1);
      this.programs.push(program);
    }
  }

  addWorkoutToGoal(){
    console.log(this.selectedWorkout)
    if (this.selectedWorkout) {
      this.selectedWorkouts.push(this.selectedWorkout);
      this.workouts = this.workouts.filter(workout => workout !== this.selectedWorkout);
      this.selectedWorkout = null;
    }
  }

  removeWorkoutFromGoal(workout: Workout){
    const index = this.selectedWorkouts.indexOf(workout);
    if (index !== -1) {
      this.selectedWorkouts.splice(index, 1);
      this.workouts.push(workout);
    }
  }

  createNewGoal() {

    let goalId: number;
    console.log(this.selectedPrograms)
    console.log(this.selectedWorkouts)
    this.workoutsIds = this.selectedWorkouts.map((workout) => workout.id)
    this.programIds = this.selectedPrograms.map((program) => program.id)

    const goal: Goal = {
      goalId: 0,
      name: this.goalName,
      startDate: this.startDate,
      endDate: this.endDate,
      completed: false,
      userId: this.userId,
      programs: this.programIds,
      completedProgramId: [],
      workoutId: this.workoutsIds,
      completedWorkoutId: []
    }

    this.goalService.createGoal(goal).subscribe({
      next: (response) => goalId = response,
      error: (error: HttpErrorResponse) => console.log(error),
      complete: () =>  (this.userService.addGoalToUser(this.userId, goalId).subscribe())
    })

    this.resetPage()
  }

  createNewWorkout(){
    console.log(this.selectedExercises)
    this.exercisesIds = this.selectedExercises.map((exercise) => exercise.id)
    console.log(this.exercisesIds)

    const workout: Workout = {
      workoutId: 0,
      name: this.workoutName,
      description: this.workoutDescription,
      exerciseIds: this.exercisesIds,
      programId: [],
      goalId: [],
    }
    
    this.workoutService.createWorkout(workout)
    console.log(JSON.stringify(workout))
  }

  resetPage(){
    //Fetched data
    this.programs = []
    this.workouts = []
    this.exercises= []
  
    //Lists with selected objects
    this.selectedPrograms = []
    this.selectedWorkouts = []
    this.selectedExercises = []
  
    //Lists with ids
    this.programIds
    this.workoutsIds
    this.exercisesIds
  
    //Selected objects
    this.selectedProgram = []
    this.selectedWorkout = []
    this.selectedExercise = []
  
    //Workout bindings
    this.workoutName = ''
    this.workoutDescription = ''
  
    //Goal bindings
    this.goalName = ''
    this.goalDescription = ''
    this.startDate = ''
    this.endDate = ''

        //Fetch all exercises
        this.exerciseService.getExercises().subscribe((response) => {
          this.exercises = response;
          console.log(response)
        })
    
        //Fetch all programs
        this.programService.getPrograms().subscribe((response) => {
          this.programs = response;
          console.log(response)
        });
    
        // Fetch all workouts
        this.workoutService.getWorkouts().subscribe((response) => {
          this.workouts = response;
          console.log(response)
        });
  }
}
