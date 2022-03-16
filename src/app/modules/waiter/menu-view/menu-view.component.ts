import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {Products} from '../../../interface/loginInterface'

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  categories: any = [];

  allProducts: any = [];

  cart: any = [];

  constructor(
    private authService: AuthService
  ) {}

  // Get products into an array
  ngOnInit() {
    this.authService.getProducts().subscribe({
      next: response => {
        // console.log(response)
        this.allProducts = response;
        this.categories = this.allProducts;
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  filterCategories(e: any) {
    const type = e.target.dataset.value;
    if(type != ''){
      this.categories = this.allProducts.filter((element: any)=> element.type === type)
    } else {
      this.categories = this.allProducts
    }
    return this.categories
  }

  addProduct(product:any) {
    // console.log(product)
    const result = this.cart.find(((x:any) => x._id == product._id))

    if (result == undefined) {
      this.cart.push({...product, qty: 1})
    } else {
      this.cart = this.cart.map((x:any) => x._id == product._id ? {...x, qty: x.qty + 1} : x)
      
    }
    console.log(this.cart)
  }
}
