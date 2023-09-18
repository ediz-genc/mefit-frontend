
// Exercises are shown in two areas, one for users and another for contributors.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Exercise } from "../models/exercise.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ExerciseService {
    constructor(private http: HttpClient) {}

    
    //-----------------User-specific actions-----------------//

    // As a user, you can browse exercises in the application. This includes a filter to view exercises by muscle group, intensity, 
    // or any other relevant fields. 
    getExercises(): Observable<Exercise[]>{
        return this.http.get<Exercise[]>(`${environment.apiUrl}/exercises`)
    }

    //Get exercise by id
    getById(exerciseId: number): Observable<Exercise> {
        return this.http.get<Exercise>(`/api/v1/exercise/${exerciseId}`)
    }


    //-----------------Contributor-specific actions-----------------//

    createExercise(exercise: Exercise): Observable<Exercise>{
        const data = {
            name: exercise.name,
            description: exercise.description,
            muscleGroup: exercise.muscleGroup,
            imgUrl: exercise.imgUrl,
            vidUrl: exercise.vidUrl,
            fitnessLevel: exercise.fitnessLevel
          };
          return this.http.post<Exercise>(`${environment.apiUrl}/exercises/`, JSON.stringify({data}), {
            headers: {

            }
          })
    }
    
    //-----------------Admin-specific actions----------------------//

    //Delete exercise
    deleteExercise(exerciseId: number){
        return this.http.delete(`${environment.apiUrl}/exercises/${exerciseId}`);
    }

    updateExercise(exercise: Exercise): Observable<Exercise>{
        const data ={
            name: exercise.name,
            description: exercise.description,
            muscleGroup: exercise.muscleGroup,
            imgUrl: exercise.imgUrl,
            vidUrl: exercise.vidUrl,
            fitnessLevel: exercise.fitnessLevel
        };
        return this.http.put<Exercise>(`${environment.apiUrl}/exercises/${exercise.exerciseId}`, JSON.stringify({data}),{
            headers: {

        }
        })
    }
    
}