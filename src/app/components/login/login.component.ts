import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    private readonly router: Router, 
    private readonly loginService: LoginService) { }

  ngOnInit(): void { 
    if (this.loginService.userAuthenticated() == true && this.loginService.tokenSaved() == false) {
      this.loginService.saveToken();
      this.router.navigateByUrl("dashboard");
    }
  }

  login() {
    this.loginService.login();
  }

}
