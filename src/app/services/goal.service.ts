
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

@Injectable({
    providedIn: 'root'
})

export class GoalService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//

    // The period and status of the current goal
    getCurrentGoal(userId: string):Observable<Goal>{
        return this.http.get<Goal>("http//localhost8080/api/v1/goals/" + userId)
    }

    // Completed workouts
    getCompletedWorkouts(userId: string): Observable <Workout[]>{
        return this.http.get<Workout[]>(`http//localhost8080/api/v1/goals/${userId}/workouts/completed`);
    }

    // Pending workouts
    getPendingWorkouts(userId: string): Observable <Workout[]>{
        return this.http.get<Workout[]>(`http//localhost8080/api/v1/goals/${userId}/workouts/pending`);
    }

    getAllWorkouts(userId: string): Observable<Workout[]>{
        return this.http.get<Workout[]>(`http//localhost8080/api/v1/goals/${userId}/workouts`)
    }
    // The reference to the user's previously achieved goals
    getGoalHistory(userId: string): Observable <Goal[]>{
        return this.http.get<Goal[]>(`http//localhost8080/api/v1/goals/${userId}/history`);
    }

    addProgramAndWorkoutToGoal(goalId: number, programId: number, workoutId: number): Observable<void> {
        const data = {
          programId: programId,
          workoutId: workoutId,
        };
        return this.http.patch<void>(`http://localhost:8080/api/v1/goals/${goalId}`, data);
      }



    //-----------------Contributor-specific actions-----------------//
     


    
}