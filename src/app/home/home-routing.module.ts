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
        path: 'utilisateur',
        loadChildren: () => import('../pages/utilisateur/utilisateur.module').then(m => m.UtilisateurPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chatbot'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
