import { Component, OnInit } from '@angular/core';

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
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'folder'
    },
    {
      title: 'Notifications',
      url: '/notif',
      icon: 'notifications'
    },
    {
      title: 'Réglages',
      url: '/reglages',
      icon: 'settings'
    },
    {
      title: 'Qui Sommes Nous ?',
      url: '/apropos',
      icon: 'people-circle'
    },
    {
      title: 'Contacter-nous',
      url: '/contact',
      icon: 'paper-plane'
    },
    {
      title: 'Signaler un problème',
      url: '/probleme',
      icon: 'bug'
    }
  ];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
