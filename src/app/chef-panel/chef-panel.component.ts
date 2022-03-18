import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-chef-panel',
  templateUrl: './chef-panel.component.html',
  styleUrls: ['./chef-panel.component.scss']
})
export class ChefPanelComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  logoutUser() {
    this.authService.logout();
  }

}
