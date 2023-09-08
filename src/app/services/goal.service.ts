
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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Goal } from "../models/goal.model";
import { User } from "../models/user.model";
import { Workout } from "../models/workout.model";
import { Program } from "../models/program.model";

@Injectable({
    providedIn: 'root'
})

export class GoalService {
    constructor(private http: HttpClient) {}

    rootUrl: string = "http//localhost8080/api/v1/goals/"
    //-----------------User-specific actions-----------------//

    // The period and status of the current goal
    getGoalById(goalId: number):Observable<Goal>{
        return this.http.get<Goal>(`${this.rootUrl}` + goalId)
    }

    // Completed workouts
    getCompletedWorkouts(goalId: number): Observable <Workout[]>{
        return this.http.get<Workout[]>(`${this.rootUrl}${goalId}/workouts/completed`);
    }

    // Pending workouts
    getPendingWorkouts(goalId: number): Observable <Workout[]>{
        return this.http.get<Workout[]>(`${this.rootUrl}${goalId}/workouts/pending`);
    }

    // All workouts
    getAllWorkouts(goalId: number): Observable<Workout[]>{
        return this.http.get<Workout[]>(`${this.rootUrl}${goalId}/workouts`)
    }

    // Completed programs
    getCompletedPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(`${this.rootUrl}${goalId}/programs/completed`);
    }

    //Pending programs
    getPendingPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(`${this.rootUrl}${goalId}/programs/pending`);
    }

    // All programs
    getAllPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(`${this.rootUrl}${goalId}/programs`);
    }

    addProgramAndWorkoutToGoal(goalId: number, programId: number, workoutId: number): Observable<void> {
        const data = {
          programId: programId,
          workoutId: workoutId,
        };
        return this.http.patch<void>(`${this.rootUrl}${goalId}`, data);
      }



    //-----------------Contributor-specific actions-----------------//
     


    
}