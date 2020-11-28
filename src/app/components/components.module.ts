import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ListesArticlesComponent } from './listes-articles/listes-articles.component';
import { ItemPscyhologueComponent } from './item-pscyhologue/item-pscyhologue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemPscyhologueComponent,
    ListesArticlesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ItemPscyhologueComponent,
    ListesArticlesComponent
  ]
})
export class ComponentsModule { }
