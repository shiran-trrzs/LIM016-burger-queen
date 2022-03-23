import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-chef-panel',
  templateUrl: './chef-panel.component.html',
  styleUrls: ['./chef-panel.component.scss']
})
export class ChefPanelComponent implements OnInit {

  name!: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    const chef = localStorage.getItem('username')
    this.name = chef
  }

  logoutUser() {
    this.authService.logout();
  }

}
