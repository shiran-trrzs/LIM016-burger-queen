import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterPanelComponent } from './waiter-panel/waiter-panel.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { WaiterRoutingModule } from './waiter-routing.module';

@NgModule({ 
  declarations: [
    WaiterPanelComponent,
    MenuViewComponent,
    OrdersViewComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
