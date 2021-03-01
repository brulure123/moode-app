import { PandorabotApiService } from './../../services/pandorabot/pandorabot-api.service';
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
  pandorabotResponses: string = '';

  constructor(
    private pandorabotService: PandorabotApiService
  ) { }

  ngOnInit() {
    
    this.messages = this.getMessages();
    this.messages.push(this.question);
    this.pandorabotResponses = '<button><text>Ca va très bien</text><postback>Ok</postback></button><button><text>Déjà bon</text><postback>Ok</postback></button><button><text>On verra à la fin</text><postback>Ok</postback></button>';
    this.parsingMessage();
  }

  // --- Plusieurs étapes doivent être respecter. --- //
  //On récupère le postback correspondant
  // Ok - Après le click on supprime tous les bouttons
  // On Enregistre le message
  // On recupère le message de pandorabots
  // On rappèle la méthode parsing
  sendMessage() {
  
    this.pandorabotResponses = '<button><text>Ca va très bien</text><postback>Ok</postback></button><button><text>Déjà bon</text><postback>Ok</postback></button>';
    setInterval(() => this.parsingMessage(), 3000);

    // this.pandorabotService.talk('', '', (p) => {
      
    // });
  }

  getMessages() {
    return ['Salut, Je suis Moode', 'Salut Moode', 'Comment tu te nomme?', 'Je m\'appelle Ben Zongwe', 'Ben Zongwe.\n C\'est un très beau nom', 'Merci','Salut, Je suis Moode','Salut, Je suis Moode','Salut, Je suis Moode','Salut, Je suis Moode','Comment tu te nomme?','Comment tu te nomme?','Comment tu te nomme?','Comment tu te nomme?','Comment tu te nomme?','Comment tu te nomme?'];
  }

  parsingMessage(): void {
    this.pandorabotResponses = this.pandorabotResponses.replace(/<button>/g, '<ion-button color="success" shape="round" fill="outline">');
    this.pandorabotResponses = this.pandorabotResponses.replace(/<\/button>/g, '</ion-button>');
    this.pandorabotResponses = this.pandorabotResponses.replace(/<text>/g, '');
    this.pandorabotResponses = this.pandorabotResponses.replace(/<\/text>/g, '');
    this.pandorabotResponses = this.pandorabotResponses.trim();
    this.showingIonContent();
  }

  showingIonContent(): void {
    const actions = document.getElementById('responses');

    actions.innerHTML = this.pandorabotResponses;
    actions.childNodes.forEach((node) => {
      node.addEventListener('click', () => {
        actions.innerHTML = '';
        this.sendMessage();
      }, false);
    }); 
  }
}
