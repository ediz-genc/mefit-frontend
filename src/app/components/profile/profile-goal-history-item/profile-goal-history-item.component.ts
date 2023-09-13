import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
// import { GoalService } from 'src/app/services/goal.service';
// import {UserService} from "../../../services/user.service";
// import {LoginService} from "../../../services/login.service";
// import {User} from "../../../models/user.model";

@Component({
  selector: 'app-profile-goal-history-item',
  templateUrl: './profile-goal-history-item.component.html',
  styleUrls: ['./profile-goal-history-item.component.css']
})
export class ProfileGoalHistoryItemComponent {
  @Input() goal!: Goal;
  //
  // currentUserGoals: Goal[] = [];
  // constructor(
  //   private userService: UserService,
  //   private goalService: GoalService) {
  // }
  // public currentUser:User = this.userService.getCurrentUser();
  // ngOnInit(): void {
  //   // Fetch the user's goal history when the component initializes.
  //   const currentUser:User = this.userService.getCurrentUser(); // Replace with the actual user ID.
  //   this.goalService.getUserGoalHistory(currentUser.id).subscribe((goals) => {
  //     this.currentUserGoals = goals;
  //   });
  // }
}
