import { JournalInterface } from './../../models/journal';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { DatetimeService } from '../datetime/datetime.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class JournalStorageService {

  private readonly KEY = "JOURNALS";

  constructor(
    private datetime: DatetimeService,
    private dataService: DataService,
    private storageService: StorageService
  ) { 
    this.getAllJournalsFromLocal();
  }
  
  async getAllJournalsFromLocal(): Promise<void> {
    return await this.getJournalsFromLocal().then((journals: JournalInterface[]) => {
      this.dataService.setJournals(journals);
    });
  }

  async createJournal(journal: JournalInterface):Promise<void> {
    return await this.saveJournalToLocal(journal).then().catch();
  }

  async getJournalsFromLocal(date?: Date): Promise<JournalInterface[]> {
    return await this.storageService.getFromLocalStorage(this.KEY).then((journals: JournalInterface[]) => {
      return journals;
    });
  }

  async saveJournalToLocal(journal: JournalInterface): Promise<void> {
    let journalsList: JournalInterface[] = [];
    return this.storageService.getFromLocalStorage(this.KEY).then((journals: JournalInterface[]) => {
      if(journals == null) {
        journalsList.push(journal);
      } else {
        journalsList = journals;
        journalsList.push(journal);
      }
    }).then(() => {
      this.storageService.saveToLocalStorage(this.KEY, journalsList).then(() => {
        this.dataService.setJournals(journalsList);
      });
    }).catch((error) => console.log(error));
  }
}
