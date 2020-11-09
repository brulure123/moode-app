import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'chatbot',
        loadChildren: () => import('../pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
      },
      {
        path: 'psychologue',
        loadChildren: () => import('../pages/psychologue/psychologue.module').then( m => m.PsychologuePageModule)
      },
      {
        path: 'journal',
        loadChildren: () => import('../pages/journal/journal.module').then( m => m.JournalPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'parametres',
        loadChildren: () => import('../pages/parametres/parametres.module').then( m => m.ParametresPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
