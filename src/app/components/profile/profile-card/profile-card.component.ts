import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from 'src/app/models/user.model';
import {LoginService} from 'src/app/services/login.service';
import {UserService} from 'src/app/services/user.service';
import {Goal} from 'src/app/models/goal.model';
import {GoalService} from 'src/app/services/goal.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @ViewChild('userSettings') userSettings: any;
  goalHistory: Goal[] = [];

  constructor(
    private userService: UserService,
    private goalService: GoalService,
    private readonly loginService: LoginService) {
  }

  public currentUser: User = this.userService.getCurrentUser();
  public currentGoal: Goal = this.goalService.getCurrentGoal()

  ngOnInit(): void {
    const userId = this.loginService.getTokenId();

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
  }
}
