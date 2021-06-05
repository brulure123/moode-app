import { Component, Input, OnInit } from '@angular/core';
import { PsychologueInterface } from 'src/app/models/psychologue';
import { CallNumber } from '@ionic-native/call-number/ngx'

@Component({
  selector: 'app-item-pscyhologue',
  templateUrl: './item-pscyhologue.component.html',
  styleUrls: ['./item-pscyhologue.component.scss'],
})
export class ItemPscyhologueComponent implements OnInit {

  @Input() psychologues: PsychologueInterface[];

  constructor(
    //private callNumber: CallNumber
  ) { }

  ngOnInit() {}

  appeller(): void {
    //this.callNumber.callNumber("180010101010", true)
    //  .then(res => console.log('Launched dialer!', res))
    //  .catch(err => console.log('Error launching dialer', err));
  }

}
