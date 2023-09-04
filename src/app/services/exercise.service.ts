
// Exercises are shown in two areas, one for users and another for contributors.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ExerciseService {
    constructor(private http: HttpClient) {}

    
    //-----------------User-specific actions-----------------//

    // As a user, you can browse exercises in the application. This includes a filter to view exercises by muscle group, intensity, or any other relevant fields. 
    getExercises(){
        return;
    }


    //-----------------Contributor-specific actions-----------------//

    // Contributors are able to add new exercises, which include:
    // Exercise name
    // Exercise description
    // Muscle group
    // Image and video links
    createExercise(){
        return;
    }
    
}