import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacter-nous',
  templateUrl: './contacter-nous.page.html',
  styleUrls: ['./contacter-nous.page.scss'],
})
export class ContacterNousPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    email: [
      { type: 'required', message: 'L\'adresse email est obligatoire.' },
      { type: 'pattern', message: 'Saisir une adresse email valide !' }
    ],
    nom: [
      { type: 'required', message: 'Le nom est obligatoire' },
    ],
    prenom: [
      { type: 'required', message: 'Le prenom est obligatoire' },
    ],
    message: [
      {type: 'required', message: 'Le message est obligatoire'},
      {type: 'length', message: 'Votre message est bien trop cours'}
    ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      message: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
    });
  }

  save(value): any{
    console.log(value);
  }

}
