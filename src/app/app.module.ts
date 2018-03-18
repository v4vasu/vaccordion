import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CrsValidation} from './directives/validate-directive';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { VaccordianComponent } from './vaccordian/vaccordian.component';
import { AccordianComponent } from './vaccordian/accordian/accordian.component';

import {AccordianService} from './vaccordian/service/accordian.service';
import { NamefieldsComponent } from './registration/namefields/namefields.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegistrationComponent,
    FileuploadComponent,
    CrsValidation,
    VaccordianComponent,
    AccordianComponent,
    NamefieldsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'fileupload', component: FileuploadComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AccordianService],
  exports: [VaccordianComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
