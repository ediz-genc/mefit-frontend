
// This section describes the functionality related to a user’s profile and their interactions with the application.
// For every user, there should exist a profile view that is available to all other users within the system.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {}


    // The profile view should display the user’s name, profile picture, short bio, fitness preferences, and other relevant information such as height and weight.
    getUserProfile(){
        return;
    }

    // Every user should have a corresponding settings view containing a form to edit their profile settings.
    // They should not be able to change their credentials in MeFit as they are stored on an Identity Provider.
    updateUserProfile(){
        return;
    }




}