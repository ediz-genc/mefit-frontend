import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from 'src/app/models/user.model';
import {LoginService} from 'src/app/services/login.service';
import {UserService} from 'src/app/services/user.service';
import {Goal} from 'src/app/models/goal.model';
import {ProgramService} from "../../../services/program.service";
import {WorkoutService} from "../../../services/workout.service";
import {Program} from "../../../models/program.model";
import {Workout} from "../../../models/workout.model";

@Component({
    selector: 'app-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

    @ViewChild('userSettings') userSettings: any;
    goalHistory: Goal[] = [];
    completedPrograms: Program[] = [];
    completedWorkouts: Workout[] = [];

    constructor(
        private programService: ProgramService,
        private workoutService: WorkoutService,
        private userService: UserService,
        private readonly loginService: LoginService) {
    }

    public currentUser: User = this.userService.getCurrentUser();
    isUserSettingsOpen = false;
    // public currentGoal: Goal = this.goalService.getCurrentGoal()

    ngOnInit(): void {
        this.userService.getUserById(this.loginService.getTokenId()).subscribe((data) => {
            this.currentUser = {
                id: data.id,
                username: data.username,
                profilePicUrl: data.profilePicUrl,
                bio: data.bio,
                weight: data.weight,
                length: data.length,
                currentGoalId: data.currentGoalId,
                goalHistoryId: data.goalHistoryId
            }
        });

        this.userService.getGoalHistory(this.loginService.getTokenId()).subscribe({
            next: (data) => {
                this.goalHistory = data;
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            }
        });

        this.fetchCompletedPrograms();
        this.fetchCompletedWorkouts();
    }

    fetchCompletedPrograms() {
        this.programService.getPrograms().subscribe((programs) => {
            this.completedPrograms = programs;
        });
        console.log(this.completedPrograms)
    }

    fetchCompletedWorkouts() {
        this.workoutService.getWorkouts().subscribe((workouts) => {
            this.completedWorkouts = workouts;
        });
    }
    toggleUserSettings() {
        this.isUserSettingsOpen = !this.isUserSettingsOpen;
    }
}
