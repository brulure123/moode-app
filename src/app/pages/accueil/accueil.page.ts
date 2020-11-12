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
      new Article('article 1','Je suis le resumer','Je suis le corps de cette article',1),
      new Article('article 2','Je suis le resumer','Je suis le corps de cette article',2),
      new Article('article 3','Je suis le resumer','Je suis le corps de cette article',3)
    ];
  }
}

export class Article{
    public imagesrc: string;
    public titre: string;
    public resumer: string;
    public corps: string;
    public nombreDeVues: number;

  constructor(
    titre: string,
    resumer: string,
    corps: string,
    nombreDeVues: number
  ){
    this.titre = titre;
    this.resumer = resumer;
    this.corps = corps;
    this.nombreDeVues = nombreDeVues;
  }
}