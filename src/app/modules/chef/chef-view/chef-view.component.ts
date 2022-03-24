import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService,  } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements OnInit {

  statusPipe !: string 

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
        console.log(this.allOrders)
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
    case 'pending':
      statusOnTime = 'delivering'
      break;

    case 'delivering':
      statusOnTime = 'delivered'
      break;
      
    default:
      break;
  }  

  const objStatus = {
    status: statusOnTime
  }

  this.authService.changeStatusOrder(idOrder, objStatus).subscribe({
    next: response => {
      console.log(response);
      this.getOrdersOnTime()
    },
    error: error => {
      console.error('There was an error!', error);
    }
  })
  }
  
  changeSectionStatus(e: any) {
    let statusSection = e.target.dataset.value;
    console.log(statusSection)
    this.statusPipe = statusSection
  }
}
