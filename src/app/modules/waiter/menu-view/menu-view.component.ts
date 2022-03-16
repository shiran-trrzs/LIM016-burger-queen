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
  filterCategories(e: any){
    const type = e.target.dataset.value;
    if(type != ''){
      this.categories = this.allProducts.filter((element: any)=> element.type === type)
    } else {
      this.categories = this.allProducts
    }
    return this.categories
 }

}
