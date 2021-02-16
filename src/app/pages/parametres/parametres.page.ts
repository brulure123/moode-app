import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor(private authService: AuthentificationService) { }

  ngOnInit() {
  }

  deconnexion(): void {
    this.authService.logoutUser();
  }

}
