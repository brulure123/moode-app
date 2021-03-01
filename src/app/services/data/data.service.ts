import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JournalInterface } from 'src/app/models/journal';
import { MessageInterface } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly messages: BehaviorSubject<MessageInterface[]>;
  private readonly journals: BehaviorSubject<JournalInterface[]>;

  constructor() { 
    this.messages = new BehaviorSubject<MessageInterface[]>(null);
    this.journals = new BehaviorSubject<JournalInterface[]>(null);
  }

  async getMessages(): Promise<MessageInterface[]>{
    return this.messages.getValue();
  }

  async setMessages(messages: MessageInterface[]): Promise<void>{
    return this.messages.next(messages);
  }

  getMessagesSubscription(): BehaviorSubject<MessageInterface[]> {
    return this.messages;
  }

  async getJournals(): Promise<JournalInterface[]>{
    return this.journals.getValue();
  }

  async setJournals(journals: JournalInterface[]): Promise<void>{
    return this.journals.next(journals);
  }

  getJournalsSubscription(): BehaviorSubject<JournalInterface[]> {
    return this.journals;
  }
}
