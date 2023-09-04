import {Component} from '@angular/core';
import {Router} from "@angular/router";
import keycloak from "../../../keycloak";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
  ) {
  }

  login() {
    keycloak.login()
    console.log(keycloak.token)
    this.router.navigateByUrl("dashboard").then(r => true);
  }

}
