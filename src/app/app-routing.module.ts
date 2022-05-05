import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/login/components/pages/login/login.component";
import {ForgotPasswordComponent} from "./modules/login/components/pages/forgot-password/forgot-password.component";

const routes: Routes = [
  {path:'',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
