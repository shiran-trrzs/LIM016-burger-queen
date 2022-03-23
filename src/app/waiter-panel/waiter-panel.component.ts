import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-waiter-panel',
  templateUrl: './waiter-panel.component.html',
  styleUrls: ['./waiter-panel.component.scss']
})
export class WaiterPanelComponent implements OnInit {

  name!: any;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const meserx = localStorage.getItem('username')
    this.name = meserx
  } 

  logoutUser() {
    this.authService.logout();
  }

}
