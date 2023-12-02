import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  
  constructor(private _logTest:RegisterService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (!this._logTest.canactivLog()) {
        this.route.navigateByUrl('')
      }
    
    
      return this._logTest.canactivLog()
  }
  
}
