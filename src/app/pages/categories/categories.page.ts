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
    this.categories = [
      new Categorie(1, 'Confiance en soi','',''),
      new Categorie(2, 'Estime de soi','',''),
      new Categorie(3, 'Depression','','')
    ];
  }
}

export class Categorie {
  constructor(
    public id: number,
    public designation: string,
    public imgSrc: string,
    public description: string,
  ){}
}
