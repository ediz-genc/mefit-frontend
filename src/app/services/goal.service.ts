
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

@Injectable({
    providedIn: 'root'
})

export class GoalService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//

    // The period and status of the current goal
    getCurrentGoal(){
        return;
    }

    // All workouts for the goal, completed and pending
    getCompletedGoals(){
        return;
    }

    // The reference to the user's previously achieved goals
    getGoalHistory(){
        return;
    }

    
    // An interaction to allow the user to log completed workouts for the current goal
    logCompletedWorkout(){

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