
// This section describes the functionality related to a user’s profile and their interactions with the application.
// For every user, there should exist a profile view that is available to all other users within the system.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";
import { UserRole } from "../enums/user-role.enum";

@Injectable({
    providedIn: 'root'
})


export class UserService {

    private currentUser:User = {
        userId: '',
        username: "TestUser",
        role: UserRole.Admin,
        profilePicUrl: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Test bio that might be longer in prod. Alot longer in fact, so long that you might need to test it on multiple lines. And even then, it might not be enough. Go ahead, try your best.",
        weight: "65",
        length: "170",
        currentGoalId: 0,
        goalHistoryIds: [0]
    }

    constructor(private http: HttpClient) {}

    getCurrentUser() {
        return this.currentUser;
    }
    baseApiUrl = environment.apiUrl

    // The profile view should display the user’s name, profile picture, short bio, fitness preferences, and other relevant information such as height and weight.
    getUser() :Observable<any>{
        return this.http.get(this.baseApiUrl + '/users', {})
    }

    getUserById(id: string) :Observable<User>{ 
        return this.http.get<User>(this.baseApiUrl + '/users/' + id);
    }

    addUser(newUser: User) :Observable<any>{

        const userToAdd = this.http.post<User>(this.baseApiUrl + '/users/', 
            JSON.stringify(newUser),
            {
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
            },
        })
        return userToAdd;
    }

    // Every user should have a corresponding settings view containing a form to edit their profile settings.
    // They should not be able to change their credentials in MeFit as they are stored on an Identity Provider.
    updateUserProfile() {
        return;
    }




}