import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

export const regGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const loginService = inject(LoginService);
  return userService.userExists(loginService.getTokenId());
};
