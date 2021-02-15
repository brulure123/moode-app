import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { ListesArticlesComponent } from './listes-articles/listes-articles.component';
import { ItemPscyhologueComponent } from './item-pscyhologue/item-pscyhologue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemPscyhologueComponent,
    ListesArticlesComponent,
    LogoComponent,
    SlidesComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ItemPscyhologueComponent,
    ListesArticlesComponent,
    LogoComponent,
    SlidesComponent,
    StartComponent
  ]
})
export class ComponentsModule { }
