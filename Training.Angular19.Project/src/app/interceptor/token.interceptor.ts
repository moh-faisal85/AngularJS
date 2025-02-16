import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("angular19Token");
  const router = inject(Router);
  //If token not availabe redirect to login page
  if (!token) {
    router.navigateByUrl("login");
  }
 const newReq = req.clone(
  {
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next(newReq);
};
