import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersViewComponent } from './orders-view.component';
import { OrdersViewRoutingModule } from './orders-view-routing.module';
import { FilterOrdersPipe } from 'src/app/pipes/filter-orders.pipe';
import { SortOrdersPipe } from 'src/app/pipes/sort-orders.pipe';
import { StatusBtnPipe } from 'src/app/pipes/status-btn.pipe';

@NgModule({
  declarations: [
    OrdersViewComponent,
    FilterOrdersPipe,
    SortOrdersPipe,
    StatusBtnPipe
  ],
  imports: [
    CommonModule,
    OrdersViewRoutingModule
  ]
})
export class OrdersViewModule { }
