import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

export const homeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService =inject(LoginService)
  const userService = inject(UserService)

  if (loginService.userAuthenticated() && !userService.userExistsBool()) {
    return router.navigateByUrl("/register")
  }
  else {
    return true;
  }
  
};
