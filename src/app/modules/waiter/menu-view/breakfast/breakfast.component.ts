import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {

allProducts: any = [];
allBreakfast: any = []

  constructor(
    private authService: AuthService
  ) {}

  // Get products into an array
  ngOnInit() {
    this.authService.getProducts().subscribe({
      next: response => {
        this.allProducts = response;
        // console.log(response)

        this.allBreakfast = this.allProducts.forEach(function(v: any) {
          const breakfast = [];
          // console.log(v);
          if(v.type=== 'breakfast') {
            breakfast.push(v)
            console.log(breakfast);
          }
          console.log(breakfast)
          return breakfast
        })
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }
  
}
