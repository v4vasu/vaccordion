import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'userName': new FormGroup({
        'firstName': new FormControl(''),
        'middleName': new FormControl(''),
        'lastName': new FormControl('')
      }),
      'email': new FormControl(''),
      'userAddress': new FormGroup({
        'streetAddress': new FormControl(''),
        'apt': new FormControl(''),
        'city': new FormControl(''),
        'state': new FormControl(''),
        'zipCode': new FormControl('')
      })
    });
  }

  register(){
    console.log(this.registrationForm);
  }

}
