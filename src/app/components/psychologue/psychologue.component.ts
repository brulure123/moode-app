import { PsychologueInterface } from './../../models/psychologue';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-psychologue',
  templateUrl: './psychologue.component.html',
  styleUrls: ['./psychologue.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologueComponent implements OnInit {

  psychologues: PsychologueInterface[] = [];

  constructor() { }

  ngOnInit(){
    this.psychologues = [
      {
        id: '1',
        nom: 'Zongwe Benoni',
        addresse: 'Shangungu N° 28',
        numeroTelephone: '+243975442523',
        email: '16zb463@esisalama.org',
        password: '23617252',
        imageSrc: "./../../../assets/img/ai-bot.jpeg"
      }, 
      {
        id: '1',
        nom: 'Zongwe Benoni',
        addresse: 'Shangungu N° 28',
        numeroTelephone: '+243975442523',
        email: '16zb463@esisalama.org',
        password: '23617252',
        imageSrc: "./../../../assets/img/ai-bot.jpeg"
      }
    ]
  }
}
