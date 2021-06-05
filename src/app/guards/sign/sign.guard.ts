import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['home']);
      return true;
    }
    return true;
  }
  
}
