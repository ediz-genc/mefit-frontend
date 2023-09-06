
// Exercises are shown in two areas, one for users and another for contributors.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Exercise } from "../models/exercise.model";

@Injectable({
    providedIn: 'root'
})

export class ExerciseService {
    constructor(private http: HttpClient) {}

    
    //-----------------User-specific actions-----------------//

    // As a user, you can browse exercises in the application. This includes a filter to view exercises by muscle group, intensity, 
    // or any other relevant fields. 
    getExercises(): Observable<Exercise[]>{
        return this.http.get<Exercise[]>(`http//localhost8080/api/v1/exercises`)
    }


    //-----------------Contributor-specific actions-----------------//

    // Contributors are able to add new exercises, which include:
    // Exercise name
    // Exercise description
    // Muscle group
    // Image and video links
    createExercise(exercise: Exercise): Observable<Exercise>{
        const data = {
            name: exercise.name,
            description: exercise.description,
            muscleGroup: exercise.muscleGroup,
            imgUrl: exercise.imgUrl,
            vidUrl: exercise.vidUrl,
            fitnessLevel: exercise.fitnessLevel
          };
          return this.http.post<Exercise>(`http://localhost:8080/api/v1/exercises/`, JSON.stringify({data}), {
            headers: {

            }
          })
    }
    
}