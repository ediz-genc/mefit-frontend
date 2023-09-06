import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

  
export class DashboardComponent {
  constructor(public readonly userService: UserService) {}
  
  ngOninit():void {
    
  }

  getUsers() {
    this.userService.getUser().subscribe({
      next: (data) => console.log(data), 
      error: (error:HttpErrorResponse) => console.log(error)
    })
  }

}
