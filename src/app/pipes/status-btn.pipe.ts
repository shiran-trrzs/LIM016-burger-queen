import { Pipe, PipeTransform } from '@angular/core';
import { NewOrder } from '../interface/loginInterface'

@Pipe({
  name: 'statusBtn'
})
export class StatusBtnPipe implements PipeTransform {

  transform(value: NewOrder[]): NewOrder[] {
    const result = value.map((e) =>  e.status == 'delivering' ? {...e, status: 'ready to serve'} : e)
    return result
  }

}

// this.arrOrder = this.arrOrder.map((x:any) => x._id == order._id ? {...x, qty: x.qty + 1, totalPrice: x.price * (x.qty + 1) } : x)

