import { CanActivateFn } from '@angular/router';
import { isLoggedIn } from '../util/userstatus';

export const authGuard: CanActivateFn = (route, state) => {
  return isLoggedIn();
};
