import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.userAuthenticated() == true && this.loginService.tokenSaved() == false) {
      this.loginService.saveToken();
      this.router.navigateByUrl("register");
    }
  }

  login() {
    this.loginService.login();
  }

}
