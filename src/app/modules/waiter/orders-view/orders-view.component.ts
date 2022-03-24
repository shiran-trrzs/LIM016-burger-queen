import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  statusPipe !: string 

  allOrders: any = []

  allStatusOrders: object[] = []
  
  arrOrderByUserId : any = []

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
      this.getOrdersOnTime()
    }
  })

  }

  changeSectionStatus(e: any) {
    let statusSection = e.target.dataset.value;
    this.statusPipe = statusSection
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
