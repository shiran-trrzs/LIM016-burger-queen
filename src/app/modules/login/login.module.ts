import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    FormComponent
  ]
})
export class LoginModule { }
