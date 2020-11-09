import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsychologuePage } from './psychologue.page';

const routes: Routes = [
  {
    path: '',
    component: PsychologuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsychologuePageRoutingModule {}
