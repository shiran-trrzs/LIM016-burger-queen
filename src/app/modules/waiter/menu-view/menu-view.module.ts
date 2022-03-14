import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuViewComponent } from './menu-view.component';
import { MenuViewRoutingModule } from './menu-view-routing.module';
import { AllComponent } from './all/all.component';
import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

@NgModule({
  declarations: [
    MenuViewComponent,
    AllComponent,
    LunchComponent,
    BreakfastComponent
  ],
  imports: [
    CommonModule,
    MenuViewRoutingModule
  ]
})
export class MenuViewModule { }
