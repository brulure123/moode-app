import { DatetimeService } from './../../services/datetime/datetime.service';
import { JournalStorageService } from './../../services/journal-storage/journal-storage.service';
import { JournalInterface } from './../../models/journal';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  journals: JournalInterface[];
  subscription: SubscriptionLike;

  constructor(
    private alertController: AlertController,
    private dataService: DataService,
    private journalService: JournalStorageService,
    private datetimeService: DatetimeService
    ) { }

  ngOnInit() {
    this.subscription = this.dataService.getJournalsSubscription()
      .subscribe({
        next: (journal: JournalInterface[]) => {
          if(journal != null){
            this.journals = journal;
          } else {
            this.journals = [];
          }
        },
        error: (err) => {},
        complete: () => {}
      })
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
          handler: (alertData: JournalInterface) => {
            if (alertData.object !== '' && alertData.details !== '' && (alertData.date)){
              alertData.uid = this.datetimeService.getCurrentDateTime().getMilliseconds().toString();
              this.journalService.createJournal(alertData).then(() => {
                console.log("Journal Created With Success");
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
