import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})

export class AllComponent implements OnInit {

  allProducts: any = [];

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getProducts().subscribe({
      next: response => {
        this.allProducts = response;
        console.log(response)
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

}
