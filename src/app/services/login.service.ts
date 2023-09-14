import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import keycloak from "src/keycloak";
import {Route, Router} from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private readonly http: HttpClient, private readonly router: Router) {
  }

  baseApiUrl = environment.frontEndUrl

  saveToken(): void {
    localStorage.setItem('token', keycloak.token!);
  }

  tokenSaved(): boolean {
    if (localStorage.getItem('token') == null) {
      return false;
    }
    return true;
  }

  userAuthenticated(): boolean {
    if (keycloak.authenticated == true) {
      return true;
    }
    return false;
  }

  login() {
    keycloak.login({redirectUri: this.baseApiUrl + '/register'});
  }

  logout() {
    keycloak.logout({redirectUri: this.baseApiUrl});
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  getTokenId(): string {
    return keycloak.tokenParsed!.sub!;
  }
}
