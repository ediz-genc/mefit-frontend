import { Component } from '@angular/core';
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
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private userService:UserService){}

  public currentUser:User = this.userService.getCurrentUser();
  isUserPanelOpen = false;

  ngOnInit(): void {
    console.log(keycloak.token)
    this.currentUser = this.userService.getCurrentUser();
  }

  toggleUserPanel() {
    this.isUserPanelOpen = !this.isUserPanelOpen;
  }
  closeUserPanel() {
    this.isUserPanelOpen = false;
  }

  logout(): void {
    this.loginService.logout();
  }

  tokenSaved(): boolean {
    return this.loginService.tokenSaved();
  }
}
