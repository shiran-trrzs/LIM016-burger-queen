import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';
import { AuthService,  } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements AfterViewInit {

  @ViewChildren('totalPrice')
  totalPrice!: ElementRef;

  statusPipe !: string;

  allOrders: any = [];

  allStatusOrders: any = [];

  intentou: any;

  constructor(
    private authService: AuthService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.getOrdersOnTime() 
    console.log(this.totalPrice.nativeElement)
  }

  getOrdersOnTime() {
    this.authService.getOrders().subscribe({
      next: response => {
        this.allOrders = response; 
        this.allStatusOrders = this.allOrders
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
    this.statusPipe = statusSection
  }

  foo(h: any) {
    console.log(h)

    this.allStatusOrders.map((e:any) => {
    if (h == e._id) {
        e.products.map((ee: any) => {
          console.log(ee.qty, ee.product.price)
          this.intentou = ee.qty * ee.product.price
          console.log(this.intentou)
        })
      }
    })
  //this.intentou = this.totalPriceOrder.reduce((acc: number, num: number) => acc + num)

  }


}
