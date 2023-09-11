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
  isUserLoggedIn = false;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private userService:UserService){}

  ngOnInit(): void {
    console.log(keycloak.token)
    this.currentUser = this.userService.getCurrentUser();
    this.isUserLoggedIn = true;
  }

  toggleUserPanel() {
    this.isUserPanelOpen = !this.isUserPanelOpen;
  }
  closeUserPanel() {
    this.isUserPanelOpen = false;
  }

  loggedIn() {
    this.isUserLoggedIn = true;
  }

  logout(): void {
    this.loginService.logout();
    this.isUserLoggedIn = false;
  }

  tokenSaved(): boolean {
    return this.loginService.tokenSaved();
  }
}
