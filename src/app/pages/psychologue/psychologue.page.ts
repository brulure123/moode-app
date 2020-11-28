import { Psychologue } from 'src/app/models/psychologue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psychologue',
  templateUrl: './psychologue.page.html',
  styleUrls: ['./psychologue.page.scss'],
})
export class PsychologuePage implements OnInit {

  psychologues: Psychologue[] = [];

  constructor() { }

  ngOnInit() {
    this.psychologues.push(new Psychologue('', 'fjsdljsd@gmail.com', 'jsfdmfjmq'));
    this.psychologues.push(new Psychologue('', 'fjsdljsd@gmail.com', 'jsfdmfjmq'));
    this.psychologues.push(new Psychologue('', 'fjsdljsd@gmail.com', 'jsfdmfjmq'));
  }

}
