import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalerUnProblemePage } from './signaler-un-probleme.page';

const routes: Routes = [
  {
    path: '',
    component: SignalerUnProblemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalerUnProblemePageRoutingModule {}
