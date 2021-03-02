import { MessageInterface } from '../../../models/message';
import { DataService } from '../../data/data.service';
import { DatetimeService } from '../../datetime/datetime.service';
import { StorageService } from '../storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageStorageService {

  constructor(
    private datetime: DatetimeService,
    private dataService: DataService,
    private storageService: StorageService
  ) { 
    this.getAllMessagesFromLocal();
  }

  async getAllMessagesFromLocal(): Promise<MessageInterface[]> {
    return await this.storageService.getFromLocalStorage('key').then((messages: MessageInterface[]) => {
      return messages;
    });
  }

  async saveMessageToLocal(message: MessageInterface): Promise<void> {
    const key = '';
    let messagesList: MessageInterface[] = [];
    return this.storageService.getFromLocalStorage(key).then((messages: MessageInterface[]) => {
      if(messages == null) {
        messagesList.push(message);
      } else {
        messagesList = messages;
        messagesList.push(message);
      }
    }).then(() => {
      this.storageService.saveToLocalStorage(key, messagesList).then(() => {
        this.dataService.setMessages(messagesList);
      });
    }).catch((error) => console.log(error));
  }
}
