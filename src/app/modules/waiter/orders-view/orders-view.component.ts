import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  allOrders: any = []

  allStatusOrders: Array<object> = []
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getOrdersOnTime() 
  }

  getOrdersOnTime() {
    this.authService.getOrders().subscribe({
      next: response => {
        this.allOrders = response;
        this.allStatusOrders = this.allOrders
        console.log(this.allOrders)
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  changeStatus(e: any) {
    // this.allOrders[1].status = 'cooking';
  const idOrder = e.target.id;
  console.log(idOrder)

  const status = e.target.value;
  console.log(status);

  let statusOnTime = '';

  switch (status) {
    case 'delivering':
      statusOnTime = 'delivered'
      break;
      
    default: alert('No tienes permisos de chef :(');
      break;
  }  

  const objStatus = {
    status: statusOnTime
  }

  this.authService.changeStatusOrder(idOrder, objStatus).subscribe({
    next: response => {
      console.log(response);
      this.getOrdersOnTime()
    }
  })

  }

}
