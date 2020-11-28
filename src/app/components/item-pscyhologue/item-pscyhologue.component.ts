import { Component, Input, OnInit } from '@angular/core';
import { Psychologue } from 'src/app/models/psychologue';

@Component({
  selector: 'app-item-pscyhologue',
  templateUrl: './item-pscyhologue.component.html',
  styleUrls: ['./item-pscyhologue.component.scss'],
})
export class ItemPscyhologueComponent implements OnInit {

  @Input() psychologues: Psychologue[];

  constructor() { }

  ngOnInit() {}

}
