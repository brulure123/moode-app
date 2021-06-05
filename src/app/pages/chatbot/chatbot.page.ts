import { MessageService } from './../../services/on-line-storage/message/message.service';
import { DatetimeService } from './../../services/datetime/datetime.service';
import { SubscriptionLike } from 'rxjs';
import { DataService } from './../../services/data/data.service';
import { MessageStorageService } from './../../services/off-line-storage/message-storage/message-storage.service';
import { MessageInterface } from './../../models/message';
import { PandorabotApiService } from './../../services/pandorabot/pandorabot-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  responses: string[];
  messageText: string;
  messages: MessageInterface[];
  subscription: SubscriptionLike;
  pandorabotResponse: string;

  constructor(
    private pandorabotService: PandorabotApiService,
    private messageOfflineService: MessageStorageService,
    private messageOnlineService: MessageService,
    private dataService: DataService,
    private datetimeService: DatetimeService
  ) { }

  ngOnInit() {
    this.messageOfflineService.getMessagesFromLocalStorage().then((value) => {
      if(value != null)
        this.messages = value;
      else this.messages = [];
    });
    // this.subscription = this.dataService.getMessagesSubscription()
    //   .subscribe({
    //     next: (message: MessageInterface[]) => {
    //       if(message != null) {
    //         this.messages = message;
    //       }            
    //       else{
    //         this.messages = [];
    //       }
    //     }, 
    //     error: (err) => {},
    //     complete: () => {}
    //   });
  }

  doTalkByInputField(): void {
    if(this.messageText == '') return;
    else {
      const message = this.messageText;
      this.messageText = '';
      this.sendMessage(message);
    }
  }

  sendMessage(message: string, postback?: string): void {
    let messageInterface: MessageInterface = {
      uid: null,
      userInput: message,
      clientId: '',
      date: new Date(),
      botResponse: null,
      that: null
    }
    this.messages.push(messageInterface);
    
    if(postback == null)
      this.pandorabotService.talk(message, (aimlResponse) => this.getResponseFromPandoratbot(aimlResponse));
    else
      this.pandorabotService.talk(postback, (aimlResponse) => this.getResponseFromPandoratbot(aimlResponse));
  }

  //A ajouter à cette méthode tout les attributs manquant à l'objet message.
  getResponseFromPandoratbot(aimlResponse: any): void {
    const botMessage: string = aimlResponse['responses'][0].split('<')[0];
    this.messages[this.messages.length - 1].botResponse = botMessage;
    this.pandorabotResponse = aimlResponse['responses'][0].replace(botMessage, '');
    this.parsingMessage();
    this.messageOfflineService.createMessage(this.messages[this.messages.length - 1]);
    //this.messageOnlineService.createMessage(this.messages[this.messages.length - 1]);
    this.showingIonContent();
  }

  parsingMessage(): void {
    this.pandorabotResponse = this.pandorabotResponse.replace(/<button>/g, '<ion-button color="success" shape="round" fill="outline">');
    this.pandorabotResponse = this.pandorabotResponse.replace(/<\/button>/g, '</ion-button>');
    this.pandorabotResponse = this.pandorabotResponse.replace(/<text>/g, '');
    this.pandorabotResponse = this.pandorabotResponse.replace(/<\/text>/g, '');
    console.log(this.pandorabotResponse);
  }
  
  //A ajouter : Cacher la postback
  showingIonContent(): void {
    const actions = document.getElementById('responses');
    actions.innerHTML = this.pandorabotResponse;
    
    actions.childNodes.forEach((node) => {
      node.addEventListener('click', () => {
        actions.innerHTML = '';
        const postbackText: string = node.lastChild.firstChild.textContent;
        this.sendMessage(node.firstChild.textContent, postbackText);
      }, false);
    }); 
  }
}
