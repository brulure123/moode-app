import { AlertController } from '@ionic/angular';
import { AuthentificationService } from './../../services/authentification/authentification.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'length', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private alertController: AlertController,
    public router: Router,
    public authService: AuthentificationService,
    public formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  signInWithEmail(value) {
    this.authService.loginWithEmailAndPassword(value)
    .then(() => {
      this.errorMessage = '';
      this.router.navigate(['/home/chatbot']);
    })
    .catch(error => {
      this.errorMessage = error.message;
      this.presentAlert(this.errorMessage);
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Echec d\'authentification',
      message: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Réinitialisation du formulaire.');
        }
      }]
    });
    await alert.present();
  }
}
