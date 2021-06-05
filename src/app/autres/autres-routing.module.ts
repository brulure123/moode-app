import { AuthGuard } from './../guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutresPage } from './autres.page';

const routes: Routes = [
  {
    path: '',
    component: AutresPage,
    children: [
      {
        path: 'setting',
        loadChildren: () => import('../pages/parametres/parametres.module').then(m => m.ParametresPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'setting'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutresPageRoutingModule {}
