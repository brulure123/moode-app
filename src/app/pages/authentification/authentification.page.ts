import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clicker(){
    this.router.navigate(['/home/chatbot']);
  }

}
