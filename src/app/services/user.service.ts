//Retrieves user profile information from Keycloak.
//Manages user-related data and functionality.

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Injectable } from "@angular/core";
import { Goal } from "../models/goal.model";
import { GoalService } from "./goal.service";

@Injectable({
    providedIn: "root"
})

export class UserService{
    private API_URL:string = "http://localhost:8080/api/v1/users"

    constructor(private readonly http:HttpClient){ }



    fetchAllUsers(): void{
         this.http.get<User[]>(this.API_URL)
    }

    fetchUsers():Observable<User[]> {
        return this.http.get<User[]>(this.API_URL)
    }

}