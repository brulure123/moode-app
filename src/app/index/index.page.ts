import { PandorabotApiService } from './../services/pandorabot-api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  selectedIndex = 1;
  currentPageTitle = 'Accueil';

  appPages = [
    {
      title: 'Accueil',
      url: '',
      icon: 'home'
    },
    {
      title: 'Categories',
      url: 'categories',
      icon: 'folder'
    },
    {
      title: 'Notifications',
      url: 'notif',
      icon: 'notifications'
    },
    {
      title: 'Réglages',
      url: 'reglages',
      icon: 'settings'
    },
    {
      title: 'Qui Sommes Nous ?',
      url: 'apropos',
      icon: 'people-circle'
    },
    {
      title: 'Contacter-nous',
      url: 'contact',
      icon: 'paper-plane'
    },
    {
      title: 'Signaler un problème',
      url: 'probleme',
      icon: 'bug'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      console.log(path);
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  navigateToAuhtPage(){
    this.router.navigate(['/authentification']);
  }

}
