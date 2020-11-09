import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacterNousPageRoutingModule } from './contacter-nous-routing.module';

import { ContacterNousPage } from './contacter-nous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacterNousPageRoutingModule
  ],
  declarations: [ContacterNousPage]
})
export class ContacterNousPageModule {}
