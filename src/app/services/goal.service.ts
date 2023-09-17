
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

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Goal } from "../models/goal.model";
import { User } from "../models/user.model";
import { Workout } from "../models/workout.model";
import { Program } from "../models/program.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class GoalService {
    constructor(private http: HttpClient) {}

    baseApiUrl = environment.apiUrl

    //-----------------User-specific actions-----------------//

    // The period and status of the current goal
    getGoalById(goalId: number):Observable<Goal>{
        return this.http.get<Goal>(this.baseApiUrl +`/goals/` + goalId)
    }

    // Completed workouts
    getCompletedWorkouts(goalId: number): Observable <Workout[]>{
        return this.http.get<Workout[]>(this.baseApiUrl + `/goals/${goalId}/workouts/completed`);
    }

    // Pending workouts
    getPendingWorkouts(goalId: number): Observable <Workout[]>{
        return this.http.get<Workout[]>(this.baseApiUrl +`/goals/${goalId}/workouts/pending`);
    }

    // All workouts
    getAllWorkouts(goalId: number): Observable<Workout[]>{
        return this.http.get<Workout[]>(this.baseApiUrl +`/goals/${goalId}/workouts`)
    }

    // Completed programs
    getCompletedPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(this.baseApiUrl +`goals/${goalId}/programs/completed`);
    }

    //Pending programs
    getPendingPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(this.baseApiUrl +`/goals/${goalId}/programs/pending`);
    }

    // All programs
    getAllPrograms(goalId: number): Observable <Program[]>{
        return this.http.get<Program[]>(this.baseApiUrl +`/goals/${goalId}/programs`);
    }

    createGoal(goal: Goal): Observable<any>{
        const data = {
            id: goal.id,
            name: goal.name,
            startDate: goal.startDate,
            endDate: goal.endDate,
            completed: goal.completed,
            userId: goal.userId,
            programId: goal.programs,
            completedProgramId: goal.completedProgramId,
            workoutId: goal.workoutId,
            completedWorkoutId: goal.completedWorkoutId
        }

        return (this.http.post<any>(`${environment.apiUrl}/goals`,
        JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json'
        }
        }))
    }

    addProgramAndWorkoutToGoal(goalId: number, programId: number, workoutId: number): Observable<void> {
        const data = {
          programId: programId,
          workoutId: workoutId,
        };
        return this.http.patch<void>(this.baseApiUrl +`/goals/${goalId}`, data);
      }

    completeGoal(goalId: number, goal:any): Observable<void> {
        return this.http.put<void>(this.baseApiUrl +`/goals/${goalId}`,
        JSON.stringify({
            name: goal.name,
            startDate: goal.startDate,
            endDate: goal.endDate,
            completed: true
        }), 
        {
            headers: {
                'Content-Type': 'application/json'
        }
        }
        );
    }

    completeWorkout(userId: String, workoutId: number): Observable<Goal> {
        return this.http.patch<Goal>(this.baseApiUrl +`/goals/${userId}/workout/${workoutId}`, {});
    }

    completeProgram(userId: String, programId: number): Observable<Goal> {
        return this.http.patch<Goal>(this.baseApiUrl +`/goals/${userId}/program/${programId}`, {});
    }



    //-----------------Contributor-specific actions-----------------//




}
