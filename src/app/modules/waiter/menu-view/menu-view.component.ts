import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService,  } from 'src/app/_services/auth.service';
import {Products, Order} from '../../../interface/loginInterface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss', './menu-view2.component.scss']
})
export class MenuViewComponent implements OnInit {

  @ViewChild('inputName')
  inputName!: ElementRef;

  categories: any = [];

  allProducts: any = [];

  arrOrder: any = [];

  data: any = {};

  totalPriceOrder: any = 0;

  constructor(
    private authService: AuthService
  ) {}

  // Get products into an array
  ngOnInit() {
    this.authService.getProducts().subscribe({
      next: response => {
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
  }

  addQty(order: Order) {
    this.arrOrder = this.arrOrder.map((x:any) => x._id == order._id ? {...x, qty: x.qty + 1, totalPrice: x.price * (x.qty + 1) } : x)
    this.arrTotalPrice()
  }

  deleteQty(order: Order) {
    if (order.qty != 1) {
      this.arrOrder = this.arrOrder.map((x:any) => x._id == order._id ? {...x, qty: x.qty - 1, totalPrice: x.price * (x.qty - 1)} : x)
      this.arrTotalPrice()
    }
  }

  deleteProduct(product: Products) {
    this.arrOrder = this.arrOrder.filter((x:any) => x !== product)
    this.arrTotalPrice() 
  }

  deleteOrder() {
    this.arrOrder.length = 0;
    this.totalPriceOrder = 0;
    this.inputName.nativeElement.value = '';
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
    let valueInput = this.inputName.nativeElement.value;

    const idUser = localStorage.getItem('idUser')

    const objOrder: any = {
      "userId": idUser,
      "client": valueInput,
      "products": this.eachProduct()
    }
    
    if ( valueInput != '') {
      this.authService.newOrder(objOrder).subscribe({
        next: response => {
          localStorage.setItem('idOrder', response._id)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your order has been sent! :)',
            showConfirmButton: false,
            timer: 1500
          })
          }, 
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Request complete');
        }
      
      }) 

      this.inputName.nativeElement.value = '';
      this.arrOrder.length = 0;
      this.totalPriceOrder = 0;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something seems to be missing from your order, check it and try again!'
      })      
    }


  } 

}
