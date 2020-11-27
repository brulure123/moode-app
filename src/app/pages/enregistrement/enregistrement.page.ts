import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.page.html',
  styleUrls: ['./enregistrement.page.scss'],
})
export class EnregistrementPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';

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
      ])),
    });
  }

  signUpWithEmail(value) {
    this.authService.registerUser(value)
    .then(user => {
      this.errorMessage = '';
      this.successMessage = 'Votre compte a été créer avec succès';
      console.log (this.successMessage);
      // navigate to user profile
    })
    .catch(error => {
      this.errorMessage = error.message;
      this.successMessage = '';
    });
  }


  redirectLoggedUserToProfilePage() {
    this.router.navigate(['/authentification']);
  }
}
