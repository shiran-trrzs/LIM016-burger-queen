import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { WaiterModule } from './waiter/waiter.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ChefModule } from './chef/chef.module';
import { PipeModuleModule } from '../pipe-module.module';


@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    PipeModuleModule
  ],
  exports: [
    ChefModule,
    LoginModule,
    WaiterModule,
    NotFoundModule
  ]
})
export class ModulesModule { }
