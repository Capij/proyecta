import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { AuthService } from '../auth/auth.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private auth:AuthService, private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.auth.authenticated) { return true; }

      // return this.auth.currentUserObservable
      //      .take(1)
      //      .map(user => !!user)
      //      .do(loggedIn => {
      //        if (!loggedIn) {
               console.log("access denied")
               this.router.navigate(['/login']);
        //      }
        //  })

  }

}
