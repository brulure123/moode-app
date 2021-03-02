import { CatalogueInterface } from './../../models/catalogue';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './catalogue-modal.component.html',
  styleUrls: ['./catalogue-modal.component.css']
})
export class CatalogueModalComponent implements OnInit {

  @Input() categorie: CatalogueInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
