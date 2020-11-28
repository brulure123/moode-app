import { Journal } from './../../models/journal';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  journals: Journal[] = [];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'De quoi êtes vous reconnaissant ?',
      inputs: [
        {
          name: 'object',
          type: 'text',
          placeholder: 'Object'
        },
        {
          name: 'date',
          type: 'date',
        },
        {
          name: 'details',
          id: 'details',
          type: 'textarea',
          placeholder: 'Raconter les détails ici. :-)'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log(' confirm Cancel');
          }
        },
        {
          text: 'Valider',
          handler: (alertData) => {
            if (alertData.object !== '' && alertData.date !== '' && alertData.details !== ''){
              this.journals.push(alertData);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
