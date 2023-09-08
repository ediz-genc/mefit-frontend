import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username = "";
  profilePicUrl = "";
  bio = "";
  weight = 0;
  length = 0;

  constructor(private readonly userService: UserService) { 
    userService = userService;
  }
  

  registerUser() {
    const newUser: User = {
      id: keycloak.tokenParsed!.sub!, //get ID from jwt token
      username: this.username,
      profilePicUrl: this.profilePicUrl,
      bio: this.bio,
      weight: this.weight,
      length: this.length,
      currentGoalId: 0,
      goalHistoryId: []
    }
    this.userService.addUser(newUser).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("User added");
      }
    });
  }
}
