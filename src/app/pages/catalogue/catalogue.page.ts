import { CatalogueService } from '../../services/on-line-storage/catalogue/catalogue.service';
import { CatalogueModalComponent } from './../../components/catalogue-modal/catalogue-modal.component';
import { CatalogueInterface } from './../../models/catalogue';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  catalogue: Observable<CatalogueInterface[]>;
  categories: CatalogueInterface[];

  constructor(
    private modalController: ModalController,
    private catalogueService: CatalogueService,
    private routerOutlet: IonRouterOutlet
  ) { 
    this.catalogue = this.catalogueService.getCatalogue();
    this.catalogue.forEach((value) => {
      if(value != null )
        this.categories = value;
      else
        this.categories = [];
    });
  }

  ngOnInit() {
    
  }

  async presentModal(categorie: CatalogueInterface) {
    const modal = await this.modalController.create({
      component: CatalogueModalComponent,
      cssClass: 'modalStyle',
      swipeToClose: true,
      animated: true,
      backdropDismiss: true,
      mode: 'ios',
      componentProps: { 
        'categorie': categorie 
      }
    });
    return await modal.present();
  }
}
