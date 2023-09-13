import { Component } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-goal-history',
  templateUrl: './profile-goal-history.component.html',
  styleUrls: ['./profile-goal-history.component.css']
})
export class ProfileGoalHistoryComponent {
  goalHistory: Goal[] = []

  constructor(private readonly loginService:LoginService,
              private readonly userService:UserService) {}
  ngOnInit(): void {
    this.userService.getGoalHistory(this.loginService.getTokenId()).subscribe({
      next: (data) => {
        this.goalHistory = data;
        console.log(data);
    },
      error: (error) => {
        console.log(error);
    }});
  }
}
