import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { WaiterModule } from './waiter/waiter.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    WaiterModule,
    NotFoundModule
  ]
})
export class ModulesModule { }
