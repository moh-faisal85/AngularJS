import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) =>{
  const _router = inject(Router);
  const loggedData = localStorage.getItem("angular19User");
  if (loggedData != null) {
    return true;
  }
  else
  {
    _router.navigateByUrl("login");
    return false;
  }
};
