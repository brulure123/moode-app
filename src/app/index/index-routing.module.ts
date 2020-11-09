import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../pages/categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'notif',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'reglages',
        loadChildren: () => import('../pages/reglages/reglages.module').then(m => m.ReglagesPageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../pages/qui-sommes-nous/qui-sommes-nous-routing.module').then(m => m.QuiSommesNousPageRoutingModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contacter-nous/contacter-nous.module').then(m => m.ContacterNousPageModule)
      },
      {
        path: 'probleme',
        loadChildren: () => import('../pages/signaler-un-probleme/signaler-un-probleme.module').then(m => m.SignalerUnProblemePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
