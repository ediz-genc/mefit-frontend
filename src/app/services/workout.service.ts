
// Workouts are shown in two areas, one for users and another for contributors.



import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Workout } from "../models/workout.model";

@Injectable({
    providedIn: 'root'
})

export class WorkoutService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//
    
    // As a user, you can browse workouts in the application. Workouts can be filtered by type or other tags. Users can view the details of a workout, such as the exercises, sets, and reps for each exercise.
    getWorkouts(): Observable<Workout[]> {
        return this.http.get<Workout[]>("http://localhost:8080/api/v1/workouts");
    }

    // A user can add a workout to a goal.
    addWorkoutToGoal(workoutId: number, goalId: number): Observable<any> {
        return this.http.patch<any>(`/api/v1/goals/${goalId}`, {
          workoutId: workoutId,
        });
    }
    
    //-----------------Contributor-specific actions-----------------//

    // Contributors are able to add new workouts, which include:  
    // Workout name
    // Workout description
    // A list of exercises in the workout with reps and sets defined
    // Recommended fitness level
    // An optional image
    
    createWorkout(workout: Workout): Observable<Workout>{
        const data ={
            id: workout.workoutId,
            name: workout.name,
            description: workout.description, 
        }
        return this.http.post<Workout>(`/api/v1/workouts`, 
        JSON.stringify(data),
        {
            headers: {
                Authentication: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
        },
        }) 
    }

    putWorkout(workout: Workout, workoutId: number): void{
        const data ={
            name: workout.name,
            description: workout.description
        }
        const changeWorkout = this.http.put(`api/v1/workouts/${workoutId}`, 
        JSON.stringify(data), 
        {
            headers: {Authentication: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'},
        })
    }

    

}

