// This section describes the functionality related to a user’s profile and their interactions with the application.
// For every user, there should exist a profile view that is available to all other users within the system.

import { UserRole } from "../enums/user-role.enum";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "src/environments/environment";
import { Goal } from "../models/goal.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private currentUser:User = {
        id: "test",
        username: "TestUser",
        profilePicUrl: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Test bio that might be longer in prod. Alot longer in fact, so long that you might need to test it on multiple lines. And even then, it might not be enough. Go ahead, try your best.",
        weight: 65,
        length: 170,
        currentGoalId: 0,
        goalHistoryId: []
    }

    constructor(private http: HttpClient) {}

    
    getCurrentUser() {
        return this.currentUser;
    }
    baseApiUrl = environment.apiUrl

    // The profile view should display the user’s name, profile picture, short bio, fitness preferences, and other relevant information such as height and weight.
    getAllUsers() :Observable<any>{
        return this.http.get(this.baseApiUrl + '/users')
    }

    getUserById(id: string) :Observable<User>{ 
        return this.http.get<User>(this.baseApiUrl + '/users/' + id);
    }

    userExists(id: string) :Observable<boolean> {
        return this.http.get<boolean>(this.baseApiUrl + '/users/' + id + '/exists');
    }

    addUser(newUser: User) :Observable<any>{

        const userToAdd = this.http.post<User>(this.baseApiUrl + '/users', 
            JSON.stringify(newUser),
            {
                headers: {
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

    getPendingWorkouts(userId: string): Observable<any>{
        return this.http.get(this.baseApiUrl + `/users/${userId}/workouts/pending`)
    }

    getCompletedWorkouts(userId: string): Observable<any>{
        return this.http.get(this.baseApiUrl + `/users/${userId}/workouts/completed`);
    }

    getPendingPrograms(userId: string): Observable<any>{
        return this.http.get(this.baseApiUrl + `/users/${userId}/programs/pending`)
    }

    getCompletedPrograms(userId: string): Observable<any>{
        return this.http.get(this.baseApiUrl + `/users/${userId}/programs/completed`)
    }

    getCurrentGoal(userId: string): Observable<any>{
        return this.http.get(this.baseApiUrl + `/users/${userId}/goal`)
    }

    //Created by GPT (just gets NaN)
    public getDaysLeftUntilDate(dateStr: string): number {
        // Split the input date string into year, month, and day components
        const [year, month, day] = dateStr.split('-').map(Number);

        // Get the current date
        const currentDate = new Date();
      
        // Create a new Date object for the target date, adjusting month (0-based) and day
        const targetDate = new Date(year, month - 1, day)
      
        // Calculate the time difference in milliseconds
        const timeDifference = targetDate.getTime() - currentDate.getTime();
      
        // Calculate the number of days left
        const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
      
        return daysLeft;
    }


  getGoalHistory(id: String): Observable <Goal[]>{
    return this.http.get<Goal[]>(this.baseApiUrl + `/users/${id}/history`);
}


}
