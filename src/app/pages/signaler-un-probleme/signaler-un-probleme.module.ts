import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignalerUnProblemePageRoutingModule } from './signaler-un-probleme-routing.module';

import { SignalerUnProblemePage } from './signaler-un-probleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignalerUnProblemePageRoutingModule
  ],
  declarations: [SignalerUnProblemePage]
})
export class SignalerUnProblemePageModule {}
