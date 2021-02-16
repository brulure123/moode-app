import { ItemPscyhologueComponent } from './item-pscyhologue/item-pscyhologue.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LogoComponent,
    SlidesComponent,
    StartComponent,
    ItemPscyhologueComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LogoComponent,
    SlidesComponent,
    StartComponent,
    ItemPscyhologueComponent
  ]
})
export class ComponentsModule { }
