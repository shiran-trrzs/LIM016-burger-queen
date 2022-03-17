import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService,  } from 'src/app/_services/auth.service';
import {Products, Order} from '../../../interface/loginInterface'

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  @ViewChild('inputName')
  inputName!: ElementRef;

  categories: any = [];

  allProducts: any = [];

  arrOrder: any = [];

  data: any = {};

  totalPriceOrder!: any

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

  addProduct(product: Products ) {
    const result = this.arrOrder.find(((x:any) => x._id == product._id))

    if (result == undefined) {
      this.arrOrder.push({...product, qty: 1, totalPrice: product.price, totalPriceOrder: 0})
    } else {
      this.arrOrder = this.arrOrder.map((x:any) => x._id == product._id ? {...x, qty: x.qty + 1, totalPrice: x.price * (x.qty + 1) } : x)
    }

    this.arrTotalPrice()
    // console.log(this.arrOrder)
  }

  addQty(order: Order) {
    this.arrOrder = this.arrOrder.map((x:any) => x._id == order._id ? {...x, qty: x.qty + 1, totalPrice: x.price * (x.qty + 1) } : x)
    this.arrTotalPrice()
  }

  deleteQty(order: Order) {
    if (order.qty != 1) {
      this.arrOrder = this.arrOrder.map((x:any) => x._id == order._id ? {...x, qty: x.qty - 1, totalPrice: x.price * (x.qty - 1)} : x)
    }
  }

  deleteProduct(product: Products) {
    this.arrOrder = this.arrOrder.filter((x:any) => x !== product)
  }

  deleteOrder() {
    this.arrOrder.length = 0
  }

  eachProduct() { 
    const detailProductData = this.arrOrder.map((e:any) => {
      this.data = {
        qty: e.qty,
        productId: e._id
      };
      return this.data
    })
    return detailProductData
  }
  
  arrTotalPrice() {
    this.totalPriceOrder = this.arrOrder.map((e:any) => {
      return e.totalPrice
    })
    return this.totalPriceOrder = this.totalPriceOrder.reduce((acc: number, num: number) => acc + num)
  }

  addNewOrder(){
    const valueInput = this.inputName.nativeElement.value;

    const idUser = localStorage.getItem('idUser')

    const objOrder:any= {
      "userId": idUser,
      "client": valueInput,
      "products": this.eachProduct()
    }
    

  this.authService.newOrder(objOrder).subscribe({
    next: response => {
      console.log(response)
      }, 
    error: error => {
      console.error(error);
    },
    complete: () => {
      console.log('Request complete');
    }
   
  }) 
} 
}
