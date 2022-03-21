import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  allOrders: any = []

  arrProducts: any = []
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getOrders().subscribe({
      next: response => {
        console.log(response);
        this.allOrders = response
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })

    

  }

}
