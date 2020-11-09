import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./pages/authentification/authentification.module').then(m => m.AuthentificationPageModule)
  },
  {
    path: 'enregistrement',
    loadChildren: () => import('./pages/enregistrement/enregistrement.module').then( m => m.EnregistrementPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
