import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-chef-panel',
  templateUrl: './chef-panel.component.html',
  styleUrls: ['./chef-panel.component.scss']
})
export class ChefPanelComponent implements OnInit {

  allOrders: any = []

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getOrders().subscribe({
      next: response => {
        console.log(response);
         return this.allOrders = response
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }

  logoutUser() {
    this.authService.logout();
  }

}
