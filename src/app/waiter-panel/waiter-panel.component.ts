import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-waiter-panel',
  templateUrl: './waiter-panel.component.html',
  styleUrls: ['./waiter-panel.component.scss']
})
export class WaiterPanelComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {} 

  logoutUser() {
    this.authService.logout();
  }

}
