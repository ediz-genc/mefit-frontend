import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import keycloak from 'src/keycloak';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  public currentUser:User = this.userService.getCurrentUser();
  isUserPanelOpen = false;

  public userPicUrl: string = ''
  public username: string = '';

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private userService:UserService){}

  ngOnInit(): void {
    console.log(keycloak.token)
    this.currentUser = this.userService.getCurrentUser();
    this.getUsername();
  }

  toggleUserPanel() {
    this.isUserPanelOpen = !this.isUserPanelOpen;
  }
  closeUserPanel() {
    this.isUserPanelOpen = false;
  }

  isLoggedIn(): boolean {
    return this.loginService.userAuthenticated()
  }

  logout(): void
  {
    this.loginService.logout();
  }

  isAdmin(): boolean{
    return this.loginService.isAdmin();
  }

  getUsername(){
    
    this.userService.getUserById(this.loginService.getTokenId()).subscribe({
      next: (user) => {
        this.username = user.username
        this.userPicUrl = user.profilePicUrl
    }})
  }
}
