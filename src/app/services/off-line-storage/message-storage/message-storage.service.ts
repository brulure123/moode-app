import { MessageInterface } from '../../../models/message';
import { DataService } from '../../data/data.service';
import { DatetimeService } from '../../datetime/datetime.service';
import { StorageService } from '../storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageStorageService {

  private readonly KEY = "MESSAGES";

  constructor(
    private datetime: DatetimeService,
    private dataService: DataService,
    private storageService: StorageService
  ) { 
    this.getAllMessagesFromLocal();
  }

  async getAllMessagesFromLocal(): Promise<void> {
    return await this.getMessagesFromLocalStorage().then((messages: MessageInterface[]) => {
      return this.dataService.setMessages(messages);
    });
  }

  async createMessage(message: MessageInterface):Promise<void> {
    return await this.saveMessageToLocal(message).then().catch();
  }


  async getMessagesFromLocalStorage(date?: Date): Promise<MessageInterface[]> {
    return await this.storageService.getFromLocalStorage(this.KEY).then((messages: MessageInterface[]) => {
      return messages;
    });
  }

  async saveMessageToLocal(message: MessageInterface): Promise<void> {
    let messagesList: MessageInterface[] = [];
    return this.storageService.getFromLocalStorage(this.KEY).then((messages: MessageInterface[]) => {
      if(messages == null) {
        messagesList.push(message);
      } else {
        messagesList = messages;
        messagesList.push(message);
      }
    }).then(() => {
      this.storageService.saveToLocalStorage(this.KEY, messagesList).then(() => {
        this.dataService.setMessages(messagesList);
      });
    }).catch((error) => console.log(error));
  }
}
