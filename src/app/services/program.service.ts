// Programs are shown in two areas, one for users and another for contributors.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Program } from "../models/program.model";

@Injectable({
    providedIn: 'root'
})

export class ProgramService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//

    // Regular users can browse all programs in the application. They should be able to filter by categories. Users should also be able to view the details of a program. 
    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>("http://localhost:8080/api/v1/programs");
      }
    // Option to add to a goal.
    addProgramToGoal(programId: number, goalId: number): Observable<any> {
        return this.http.patch<any>(`http://localhost:8080/api/v1/goals/${goalId}`,
          { programId: programId }
        );
    }

    //-----------------Contributor-specific actions-----------------//

    // Contributors are able to add new programs, which include:
    // Program name
    // Program description/motivation
    // An optional image
    // List of workouts in the program
    // Any other relevant information (tags, recommended fitness level, etc.)
    createProgram(){
        return; 
    }


    
}