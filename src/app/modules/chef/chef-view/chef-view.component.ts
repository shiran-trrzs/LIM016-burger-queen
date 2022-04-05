import { Component, OnInit } from '@angular/core';
import { AuthService,  } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss', './chefview2.component.scss']
})
export class ChefViewComponent implements OnInit {

  statusPipe !: string;

  allOrders: any = [];

  allStatusOrders: any = [];

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getOrdersOnTime(),
    this.statusPipe= ''
  }

  getOrdersOnTime() {
    this.authService.getOrders().subscribe({
      next: response => {
        this.allOrders = response; 
        this.allStatusOrders = this.allOrders
        console.log(this.allStatusOrders)
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  changeStatus(e: any) {
  const idOrder = e.target.id;

  const status = e.target.value;

  let statusOnTime = '';

  switch (status) {
    case 'pending':
      statusOnTime = 'delivering'
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
    },
    error: error => {
      console.error('There was an error!', error);
   }
  })  
}
 
  changeSectionStatus(e: any) {
    let statusSection = e.target.dataset.value;
    this.statusPipe = statusSection
  }

 

}
