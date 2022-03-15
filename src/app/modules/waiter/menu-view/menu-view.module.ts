import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuViewComponent } from './menu-view.component';
import { MenuViewRoutingModule } from './menu-view-routing.module';

@NgModule({
  declarations: [
    MenuViewComponent,
  ],
  imports: [
    CommonModule,
    MenuViewRoutingModule
  ]
})
export class MenuViewModule { }
