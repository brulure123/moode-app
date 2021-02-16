import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthentificationService    
  ) {  }

  canActivate(): boolean {
    if(!this.authService.isLoggedIn){
      this.router.navigate['authentification'];
      return false;
    }
    return true;
  }
  
}
