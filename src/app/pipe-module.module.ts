import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOrdersPipe } from 'src/app/pipes/filter-orders.pipe';
import { SortOrdersPipe } from 'src/app/pipes/sort-orders.pipe';
import { StatusBtnPipe } from 'src/app/pipes/status-btn.pipe';


@NgModule({
  declarations: [
    FilterOrdersPipe,
    SortOrdersPipe,
    StatusBtnPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterOrdersPipe,
    SortOrdersPipe,
    StatusBtnPipe
  ]
})
export class PipeModuleModule { }
