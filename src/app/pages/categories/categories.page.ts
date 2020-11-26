import { Categorie } from './../../models/categorie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Categorie[] = [];

  constructor() { }

  ngOnInit() {
    this.categories.push(new Categorie('idsf', 'Confiance en soi', 'sdfsdf', '../../../assets/img/ai-bot.jpeg'));
    this.categories.push(new Categorie('idsf', 'Estime de soi', 'sdfsdf', '../../../assets/icon/fb-favicon.jpg'));
    this.categories.push(new Categorie('idsf', 'Dépression', 'sdfsdf', '../../../assets/icon/google-favicon-ok.png'));
  }
}
