import { Pipe, PipeTransform } from '@angular/core';
import { NewOrder } from '../interface/loginInterface'

@Pipe({
  name: 'filterOrders'
})
export class FilterOrdersPipe implements PipeTransform {

  transform(value: NewOrder[], arg: string): NewOrder[] {
    
    return value.filter((e: any) => {
      e.status == arg
    })

  }

}
