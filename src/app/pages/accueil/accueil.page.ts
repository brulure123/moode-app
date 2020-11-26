import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    this.articles = [
      new Article('Hello world par l\'admininstrateur', 'Hello world par l\'administrateur. On explique ce qu\'est Moode ...', '../../../assets/img/ai-bot.jpeg','Je suis le corps de cette article', 10),
      new Article('article 2', 'Je suis le resumer', '../../../assets/icon/google-favicon-ok.png','Je suis le corps de cette article', 23),
      new Article('article 3', 'Je suis le resumer', '../../../assets/icon/google-favicon-ok.png','Je suis le corps de cette article', 30)
    ];
  }
}
