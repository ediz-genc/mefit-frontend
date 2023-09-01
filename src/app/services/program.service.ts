// Programs are shown in two areas, one for users and another for contributors.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProgramService {
    constructor(private http: HttpClient) {}

    //-----------------User-specific actions-----------------//

    // Regular users can browse all programs in the application. They should be able to filter by categories. Users should also be able to view the details of a program. 
    getPrograms(){
        return;
    }

    // Option to add to a goal.
    addProgramToGoal(){
        return; 
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