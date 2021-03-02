import { Observable } from 'rxjs';
import { CatalogueInterface } from '../../../models/catalogue';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private firestore: AngularFirestore) { }

  getCatalogue(): Observable<CatalogueInterface []>{
    return this.firestore.collection<CatalogueInterface>('catalogues').valueChanges();
  }

  createCategorie(categorie: CatalogueInterface): any {
    return this.firestore.collection('catalogues').add(categorie);
  }

  updateCategorie(categorie: CatalogueInterface): any {
    delete categorie.uid;
    this.firestore.doc('catalogues/' + categorie.uid).update(categorie);
  }

  deleteCategorie(categorieId: string): any {
    this.firestore.doc('catalogues/' + categorieId).delete();
  }
}
