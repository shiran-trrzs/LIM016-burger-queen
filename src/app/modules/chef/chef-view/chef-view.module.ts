import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefViewComponent } from './chef-view.component';
import { ChefViewRoutingModule } from './chef-view-routing.module';
// import { FilterOrdersPipe } from '../../../pipes/filter-orders.pipe';
// import { SortOrdersPipe } from '../../../pipes/sort-orders.pipe';
// import { StatusBtnPipe } from '../../../pipes/status-btn.pipe';

@NgModule({
  declarations: [
    ChefViewComponent,
    // FilterOrdersPipe,
    // SortOrdersPipe,
    // StatusBtnPipe
  ],
  imports: [
    CommonModule,
    ChefViewRoutingModule
  ]
})
export class ChefViewModule { }
