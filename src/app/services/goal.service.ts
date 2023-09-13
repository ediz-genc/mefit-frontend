// View and set goals
// This view should show the full details pertaining to a goal (weekly workouts).


// If a goal has not been set for the week, then the following should be present.
// A list of programs (collections of workouts) which can be set as a goal // METODERNA FÖR DENNA FINNS I PROGRAM.SERVICE
// A list of workouts that can be added to the goal // METODERNA FÖR DENNA FINNS I WORKOUT.SERVICE
// A list of exercises which can be compiled into a custom workout to be added to the goal // METODERNA FÖR DENNA FINNS I EXERCISE.SERVICE

// Program and or workout suggestions based on "fitness evaluation”
// A warning if the goal is unrealistic based on the user's initial evaluation information
// A button to set the goal for the week
// An option to set the starting date to a day other than the present day

import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Goal} from "../models/goal.model";
import {Workout} from "../models/workout.model";
import {Program} from "../models/program.model";
import {environment} from "src/environments/environment";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class GoalService {
  private currentGoal:Goal = {
    goalId: 10,
    name: "TestUser",
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    completed: true,
    userId: 100,
    programs: [1, 2, 3],
    completedProgramId: [12],
    workoutId: [4,5,6],
    completedWorkoutId: [11]
  }

  constructor(private http: HttpClient) {
  }

  baseApiUrl = environment.apiUrl

  //-----------------User-specific actions-----------------//


  // getGoals(): Observable<Goal> {
  //   return this.http.get<Goal>(this.baseApiUrl + `/goals/`)
  // }

  getCurrentGoal() {
    return this.currentGoal;
  }

  getUserGoalHistory(userId: string): Observable<Goal[]> {
    // Make an HTTP request to your API to retrieve the user's goal history.
    // You can adjust the URL and request type (GET, POST, etc.) based on your API design.
    const url = `/api/goals/user/${userId}/history`;
    return this.http.get<Goal[]>(this.baseApiUrl + `/goals/`);
  }

  // The period and status of the current goal
  getGoalById(goalId: number): Observable<Goal> {
    return this.http.get<Goal>(this.baseApiUrl + `/goals/` + goalId)
  }

  // Completed workouts
  getCompletedWorkouts(goalId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseApiUrl + `/goals/${goalId}/workouts/completed`);
  }

  // Pending workouts
  getPendingWorkouts(goalId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseApiUrl + `/goals/${goalId}/workouts/pending`);
  }

  // All workouts
  getAllWorkouts(goalId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseApiUrl + `/goals/${goalId}/workouts`)
  }

  // Completed programs
  getCompletedPrograms(goalId: number): Observable<Program[]> {
    return this.http.get<Program[]>(this.baseApiUrl + `goals/${goalId}/programs/completed`);
  }

  //Pending programs
  getPendingPrograms(goalId: number): Observable<Program[]> {
    return this.http.get<Program[]>(this.baseApiUrl + `/goals/${goalId}/programs/pending`);
  }

  // All programs
  getAllPrograms(goalId: number): Observable<Program[]> {
    return this.http.get<Program[]>(this.baseApiUrl + `/goals/${goalId}/programs`);
  }

  addProgramAndWorkoutToGoal(goalId: number, programId: number, workoutId: number): Observable<void> {
    const data = {
      programId: programId,
      workoutId: workoutId,
    };
    return this.http.patch<void>(this.baseApiUrl + `/goals/${goalId}`, data);
  }


  //-----------------Contributor-specific actions-----------------//


}
