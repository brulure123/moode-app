import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignGuard } from '../guards/sign/sign.guard';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../pages/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'authentification',
        loadChildren: () => import('../pages/authentification/authentification.module').then(m => m.AuthentificationPageModule),
        canActivate: [SignGuard]
      },
      {
        path: 'enregistrement',
        loadChildren: () => import('../pages/enregistrement/enregistrement.module').then( m => m.EnregistrementPageModule),
        canActivate: [SignGuard]
      },
      {
        path: 'recover',
        loadChildren: () => import('../pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule),
        canActivate: [SignGuard]
      },
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
