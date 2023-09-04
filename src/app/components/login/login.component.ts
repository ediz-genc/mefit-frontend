import {Component, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import keycloak from 'src/keycloak';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    private readonly router: Router, 
    private readonly userService: UserService) { }


  login() {
    //this.router.navigateByUrl("dashboard").then(r => true);
    // keycloak.login();
    console.log(keycloak.token)

    keycloak.token;
  }

}
