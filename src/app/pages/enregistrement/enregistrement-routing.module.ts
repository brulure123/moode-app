import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnregistrementPage } from './enregistrement.page';

const routes: Routes = [
  {
    path: '',
    component: EnregistrementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnregistrementPageRoutingModule {}
