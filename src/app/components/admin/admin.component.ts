import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import keycloak from "../../../keycloak";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  public currentUser:User = this.userService.getCurrentUser();

  userApplications = [
    { userName: this.currentUser.username, motivation: 'I want to contribute!' },
    { userName: this.currentUser.username, motivation: 'I love fitness!' },
    { userName: this.currentUser.username, motivation: 'I want to contribute!' },
    { userName: this.currentUser.username, motivation: 'I love fitness!' },
  ];

  users = [
    { userName: 'AdminUser', role: 'Admin' },
    { userName: 'ContributorUser', role: 'Contributor' },
    { userName: 'AdminUser', role: 'Admin' },
    { userName: 'ContributorUser', role: 'Contributor' },
  ];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  approveApplication(application: { userName: string, motivation: string }) {
  }

  declineApplication(application: { userName: string, motivation: string }) {
  }

  editUser(user: { userName: string, role: string }) {
  }

  deleteUser(user: { userName: string, role: string }) {
  }
}
