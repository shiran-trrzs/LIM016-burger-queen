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

