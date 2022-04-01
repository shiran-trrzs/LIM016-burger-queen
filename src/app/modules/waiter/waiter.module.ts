import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuViewModule } from './menu-view/menu-view.module';
import { OrdersViewModule } from './orders-view/orders-view.module';

@NgModule({ 
  declarations: [
  ],
  imports: [
    CommonModule,
    MenuViewModule,
    OrdersViewModule
  ]
})
export class WaiterModule { }
