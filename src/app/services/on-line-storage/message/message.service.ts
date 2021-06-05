import { MessageInterface } from './../../../models/message';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  getCatalogue(): Observable<MessageInterface []>{
    return this.firestore.collection<MessageInterface>('users/conversations').valueChanges();
  }

  createMessage(message: MessageInterface): any {
    return this.firestore.collection('users/conversations').add(message);
  }
}
