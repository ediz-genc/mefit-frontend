//Fetches available fitness programs from your backend.
//Adds selected programs to a user's goal.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Goal } from "../models/goal.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class ProgramService{


    private API_URL:string = "http://localhost:8080/api/v1/goals"

    constructor(private readonly http:HttpClient){ }



}