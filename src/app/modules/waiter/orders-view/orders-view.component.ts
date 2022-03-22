import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  statusPipe !: string 

  allOrders: any = []

  allStatusOrders: object[] = []
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getOrdersOnTime() 
    this.statusPipe= ''
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

  changeSectionStatus(e: any) {
    let statusSection = e.target.dataset.value;
    console.log(statusSection)
    this.statusPipe = statusSection
  }

}
