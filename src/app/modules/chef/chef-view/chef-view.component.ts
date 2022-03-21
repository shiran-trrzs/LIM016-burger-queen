import { Component, OnInit } from '@angular/core';
import { AuthService,  } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements OnInit {

  allOrders: any = [];

  arrProducts: any = [];

  kkk: any = [];

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.authService.getOrders().subscribe({
      next: response => {
        this.allOrders = response;
        this.jjj()
        console.log(this.allOrders)
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })

  }

   jjj() {
      this.allOrders.forEach((element: any) => {
        this.arrProducts.push(element.products);
         return this.arrProducts
      });
    }

}
