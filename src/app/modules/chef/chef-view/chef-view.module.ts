import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefViewComponent } from './chef-view.component';
import { ChefViewRoutingModule } from './chef-view-routing.module';
import { PipeModuleModule } from 'src/app/pipe-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    ChefViewComponent
  ],
  imports: [
    CommonModule,
    ChefViewRoutingModule,
    PipeModuleModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChefViewModule { }
