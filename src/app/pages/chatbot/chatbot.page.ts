import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  question: string = 'Que puis-je faire pour toi ?';
  responses: string[] = [];
  messageText: string;
  messages = [];

  constructor() { }

  ngOnInit() {
      this.responses = ['Controle de routine', 'Juste parler', 'Laisser un message de gratitude'];
      this.messages = this.getMessages();
      this.messages.push(this.question);
  }

  sendMessage(){
  }

  getMessages() {
    return ['Salut, Je suis Moode', 'Salut Moode', 'Comment tu te nomme?', 'Je m\'appelle Ben Zongwe', 'Ben Zongwe.\n C\'est un très beau nom','Merci'];
  }
}
