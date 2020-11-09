import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnregistrementPageRoutingModule } from './enregistrement-routing.module';

import { EnregistrementPage } from './enregistrement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnregistrementPageRoutingModule
  ],
  declarations: [EnregistrementPage]
})
export class EnregistrementPageModule {}
