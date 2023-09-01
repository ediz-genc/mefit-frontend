// Workouts are shown in two areas, one for users and another for contributors.



import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WorkoutService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//
    
    // As a user, you can browse workouts in the application. Workouts can be filtered by type or other tags. Users can view the details of a workout, such as the exercises, sets, and reps for each exercise.
    getWorkouts(){
        return;
    }


    // A user can add a workout to a goal.
    addWorkoutToGoal(){
        return;
    }

    
    //-----------------Contributor-specific actions-----------------//

    // Contributors are able to add new workouts, which include:  
    // Workout name
    // Workout description
    // A list of exercises in the workout with reps and sets defined
    // Recommended fitness level
    // An optional image
    
    createWorkout(){
        return;
    }
}