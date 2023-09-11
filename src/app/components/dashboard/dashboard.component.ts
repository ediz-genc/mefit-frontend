
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

  constructor(public readonly userService: UserService, public readonly loginService: LoginService){}

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

  userId: string = this.loginService.getTokenId();
  ngOnInit(): void {

    // Fetch goal
    this.userService.getUserById(this.userId).subscribe({next: (response: User) => {this.currentUser = response},
    error: (error: HttpErrorResponse) => console.log(error)})
  }
}
