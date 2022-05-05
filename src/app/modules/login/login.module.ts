import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import {ForgotPasswordComponent} from "./components/pages/forgot-password/forgot-password.component";
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class LoginModule { }
