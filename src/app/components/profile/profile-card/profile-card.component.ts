import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  currentUser: User = {
    id: "0",
    username: '',
    profilePicUrl: '',
    bio: '',
    weight: 0,
    length: 0,
    currentGoalId: 0,
    goalHistoryId: []
  };
  
  constructor(private userService:UserService, private  readonly loginService:LoginService) {
  }

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

  }
}
