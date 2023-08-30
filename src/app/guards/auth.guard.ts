import {Component, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-guards',
  templateUrl: './auth.guard.html',
  styleUrls: ['./auth.guard.css']
})

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const username = sessionStorage.getItem('username');
    if (username !== null && username !== '') {
      // The user is logged in, allow navigation
      return true;
    } else {
      // The user is not logged in, redirect to the login page
      return this.router.parseUrl('/')
    }
  }
}
