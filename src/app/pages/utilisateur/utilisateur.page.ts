import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.page.html',
  styleUrls: ['./utilisateur.page.scss'],
})
export class UtilisateurPage {

  @ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0; 

  constructor() { }  
  
  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  
}
