import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersViewComponent } from './orders-view.component';
import { OrdersViewRoutingModule } from './orders-view-routing.module';
import { FilterOrdersPipe } from 'src/app/pipes/filter-orders.pipe';

@NgModule({
  declarations: [
    OrdersViewComponent,
    FilterOrdersPipe
  ],
  imports: [
    CommonModule,
    OrdersViewRoutingModule
  ]
})
export class OrdersViewModule { }
