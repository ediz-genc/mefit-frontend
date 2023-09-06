
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import keycloak from "src/keycloak";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(private readonly http: HttpClient) {}

    saveToken(): void { 
        localStorage.setItem('token', keycloak.token!);
    }

    tokenSaved(): boolean  { 
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
        keycloak.login();
    }

    logout() {
        keycloak.logout();
        localStorage.removeItem('token');
    }

    getToken(): string{
        return localStorage.getItem('token')!;
    }




}