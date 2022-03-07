import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { LoginRoutingModule } from './login-routing.module';
import { QuoteComponent } from './quote/quote.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    FormComponent,
    QuoteComponent,
    AboutUsComponent
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
