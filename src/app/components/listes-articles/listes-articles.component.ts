import { Article } from './../../models/article';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listes-articles',
  templateUrl: './listes-articles.component.html',
  styleUrls: ['./listes-articles.component.scss'],
})
export class ListesArticlesComponent implements OnInit{

  @Input() articles: Article[];

  constructor() {
  }

  ngOnInit() { }

}
