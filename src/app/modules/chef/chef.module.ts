import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefViewModule } from './chef-view/chef-view.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ChefViewModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChefModule { }
