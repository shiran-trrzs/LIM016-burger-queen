import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    FormComponent
  ]
})
export class LoginModule { }
