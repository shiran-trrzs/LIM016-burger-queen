import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersViewComponent } from './orders-view.component';
import { OrdersViewRoutingModule } from './orders-view-routing.module';


@NgModule({
  declarations: [
    OrdersViewComponent
  ],
  imports: [
    CommonModule,
    OrdersViewRoutingModule
  ]
})
export class OrdersViewModule { }
