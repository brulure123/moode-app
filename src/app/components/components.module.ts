import { ItemPscyhologueComponent } from './item-pscyhologue/item-pscyhologue.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueModalComponent } from './catalogue-modal/catalogue-modal.component';
import { PsychologueComponent } from './psychologue/psychologue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LogoComponent,
    SlidesComponent,
    StartComponent,
    ItemPscyhologueComponent,
    CatalogueModalComponent,
    PsychologueComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LogoComponent,
    SlidesComponent,
    StartComponent,
    ItemPscyhologueComponent,
    PsychologueComponent,
    DashboardComponent,
    ProfileComponent
  ]
})
export class ComponentsModule { }
