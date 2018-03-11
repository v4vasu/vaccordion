import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: FormGroup;
  constructor() { }


  ngOnInit() {
    this.signIn = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.min(3)]),
      'password': new FormControl('', [Validators.required, Validators.min(6)])
    });
  }
  logon(){
    console.log(this.signIn)
  }

}
