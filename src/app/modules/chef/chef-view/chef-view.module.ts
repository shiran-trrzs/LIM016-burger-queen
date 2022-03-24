import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefViewComponent } from './chef-view.component';
import { ChefViewRoutingModule } from './chef-view-routing.module';
import { PipeModuleModule } from 'src/app/pipe-module.module';

@NgModule({
  declarations: [
    ChefViewComponent
  ],
  imports: [
    CommonModule,
    ChefViewRoutingModule,
    PipeModuleModule
  ]
})
export class ChefViewModule { }
