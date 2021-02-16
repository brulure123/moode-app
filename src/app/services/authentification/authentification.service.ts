import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  registerWithEmailAndPassword(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.setUserData(res.user);
            resolve(res)
          },
          err => reject(err));
    });
  }

  loginWithEmailAndPassword(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.setUserData(res.user);
            resolve(res)
          },
          err => reject(err));
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/authentification']);
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`clients/${user.uid}`);
    const userData: Client = {
      uid: user.uid,
      email: user.email,
      displayName: '',
      photoURL: '',
      emailVerified: false
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
