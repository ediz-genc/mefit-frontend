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
  prodUrl: string = 'https://me-fit-frontend-tawny.vercel.app/'

  userAuthenticated(): boolean {
    if (keycloak.authenticated == true) {
      return true;
    }
    return false;
  }

  // Returns true if user has keycloak-role "Admin"
  isAdmin(): boolean{
    return keycloak.hasRealmRole('Admin');
  }

  // Returns true if user has keycloak-role "Contributor"
  isContributor(): boolean{
    return keycloak.hasRealmRole('Contributor');
  }

  login() {
    keycloak.login({redirectUri: this.baseApiUrl});
  }

  logout() {
    keycloak.logout({redirectUri: this.baseApiUrl});
  }

  getTokenId(): string {
    return keycloak.tokenParsed!.sub!;
  }
}
