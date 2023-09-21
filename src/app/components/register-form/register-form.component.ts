import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username = "";
  profilePicUrl = "";
  bio = "";
  weight: number = 0;
  length: number = 0;

  userExists:boolean = false;

  constructor(
    private readonly userService: UserService, 
    private readonly loginService: LoginService, 
    private readonly router: Router) 
    { 
    router = router;
    userService = userService;
    loginService = loginService;
  }

  ngOnInit():void {
    this.userService.userExists(this.loginService.getTokenId()).subscribe({
      next: (data) => {
          this.userExists = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        if (this.userExists) {
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }

  registerUser() {
    const newUser: User = {
      id: this.loginService.getTokenId(), //get ID from jwt token
      username: this.loginService.getUsername(),
      profilePicUrl: this.profilePicUrl,
      bio: this.bio,
      weight: this.weight,
      length: this.length,
      currentGoalId: 0,
      goalHistoryId: []
    }

    if(isNaN(newUser.weight) || isNaN(newUser.length)){
      window.alert('Weight and hight must be numbers!')
    }else{
      this.userService.addUser(newUser).subscribe({
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("User added");
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

 // --- ---- ----Error-checking--- ----- ----  
  checkNumberWeight: boolean = false;
  checkNumberLength: boolean = false;
  checkURL: boolean = false;

  checkInput(){
    if(this.profilePicUrl.length > 255){
      this.checkURL = true;
    }else{
      this.checkURL = false;
    }
  }

  checkInputWeight(){
    if(isNaN(this.weight) || null || undefined){
      this.checkNumberWeight = true
    }else{
      this.checkNumberWeight = false;
    }
  }

  checkInputLength(){
    if(isNaN(this.length) || null || undefined){
      this.checkNumberLength = true;
    }else{
      this.checkNumberLength = false;
    }
  }
}
