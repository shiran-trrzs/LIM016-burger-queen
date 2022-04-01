import { Pipe, PipeTransform } from '@angular/core';
import { NewOrder } from '../interface/loginInterface'

@Pipe({
  name: 'filterOrders'
})
export class FilterOrdersPipe implements PipeTransform {

  transform(value: NewOrder[], arg: string): NewOrder[] {
    let result: NewOrder[] = []
    if (arg != '') {
      result = value.filter((e: NewOrder) => e.status == arg)
    } else {
      result = value.filter((e:NewOrder) => e.status !== 'canceled')
    }
    return result
  }

}
