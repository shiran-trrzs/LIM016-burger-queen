import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { ModulesModule } from '../modules/modules.module'

@NgModule({
  declarations: [
    HeaderLoginComponent
  ],
  imports: [
    CommonModule,
    ModulesModule
  ],
  exports: [
    HeaderLoginComponent
  ]

})
export class SharedModule { }
