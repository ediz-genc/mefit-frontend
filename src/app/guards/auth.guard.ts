import {Component, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-guards',
  templateUrl: './auth.guard.html',
  styleUrls: ['./auth.guard.css']
})

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private router: Router, private userService: UserService, private loginService: LoginService) { }
  userExists:boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginService.userAuthenticated()
  }
}

