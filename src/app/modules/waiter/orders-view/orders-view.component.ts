import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss', './ordersview2.component.scss']
})
export class OrdersViewComponent implements OnInit {

  statusPipe !: string 

  allOrders: any = []

  allStatusOrders: object[] = []
  
  arrOrderByUserId : any = []

  totalPrice: any;

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
        let meserxId = localStorage.getItem('idUser')
        this.allOrders = response;
        this.arrOrderByUserId = this.allOrders.filter((e:any) => {
          return meserxId === e.userId
        })
        console.log(this.allOrders);
        this.allStatusOrders = this.arrOrderByUserId
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  changeStatus(e: any) {
    
  const idOrder = e.target.id;
  console.log(idOrder)

  const status = e.target.value;
  console.log(status);

  let statusOnTime = '';

  switch (status) {
    case 'ready to serve':
      statusOnTime = 'delivered'
      break;
      
    default: Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You do not have permission to make this status change!',
    });
      break;
  }  

  const objStatus = {
    status: statusOnTime
  }

  this.authService.changeStatusOrder(idOrder, objStatus).subscribe({
    next: response => {
      this.getOrdersOnTime()
    }
  })

  }

  changeSectionStatus(e: any) {
    let statusSection = e.target.dataset.value;
    this.statusPipe = statusSection
  }

  getTotalPrice(idOfOrder: any) {
    let priceOfEachProduct !: any;
    let arrPrices !: any;
    this.allStatusOrders.map((e:any) => {
    if (idOfOrder == e._id) {
      arrPrices = e.products.map((ee: any) => {
        priceOfEachProduct = ee.qty * ee.product.price
          return priceOfEachProduct
        })
      }
    })
  this.totalPrice = arrPrices.reduce((acc: number, num: number) => acc + num)
  return this.totalPrice
  }

  cancelOrder(e:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30b9d6',
      cancelButtonColor: '#f35f4c',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const idOrder = e.target.id;
        const objStatus = {
          status: 'canceled'
        }
        this.authService.changeStatusOrder(idOrder, objStatus).subscribe({
          next: response => {
            this.getOrdersOnTime()
          }
        })

        Swal.fire(
          'Canceled!',
          'The order has been canceled.',
          'success'
        )
      }
    })
  }
}
