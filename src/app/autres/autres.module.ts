import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutresPageRoutingModule } from './autres-routing.module';

import { AutresPage } from './autres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutresPageRoutingModule
  ],
  declarations: [AutresPage]
})
export class AutresPageModule {}
