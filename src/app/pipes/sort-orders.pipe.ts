import { Pipe, PipeTransform } from '@angular/core';
import { NewOrder } from '../interface/loginInterface'

@Pipe({
  name: 'sortOrders'
})
export class SortOrdersPipe implements PipeTransform {

  transform(value: NewOrder[]): NewOrder[] {
    const sortDate = value.sort((a, b) => {
     return (a.dateEntry > b.dateEntry) ? -1 : 0
  })
    return sortDate
  }

}
