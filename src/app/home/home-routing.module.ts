import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth/auth.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'catalogue',
        loadChildren: () => import("../pages/catalogue/catalogue.module").then(m => m.CataloguePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'chatbot',
        loadChildren: () => import('../pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'journal',
        loadChildren: () => import('../pages/journal/journal.module').then( m => m.JournalPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'psychologue',
        loadChildren: () => import('../pages/psychologue/psychologue.module').then( m => m.PsychologuePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'parametres',
        loadChildren: () => import('../pages/parametres/parametres.module').then( m => m.ParametresPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chatbot'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
