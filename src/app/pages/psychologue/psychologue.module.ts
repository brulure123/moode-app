import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsychologuePageRoutingModule } from './psychologue-routing.module';

import { PsychologuePage } from './psychologue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PsychologuePageRoutingModule
  ],
  declarations: [PsychologuePage]
})
export class PsychologuePageModule {}
