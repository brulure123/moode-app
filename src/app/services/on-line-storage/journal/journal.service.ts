import { JournalInterface } from './../../../models/journal';
import { MessageInterface } from './../../../models/message';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private firestore: AngularFirestore) { }

  getJournal(): Observable<JournalInterface []>{
    return this.firestore.collection<JournalInterface>('users/journals').valueChanges();
  }

  createJournal(journal: JournalInterface): any {
    return this.firestore.collection('users/journals').add(journal);
  }
}
