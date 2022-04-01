import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-chef-panel',
  templateUrl: './chef-panel.component.html',
  styleUrls: ['./chef-panel.component.scss']
})
export class ChefPanelComponent implements OnInit {

  name!: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const chef = localStorage.getItem('username')
    this.name = chef
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/'])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Log out successfully, have a nice day! :)',
      showConfirmButton: false,
      timer: 1500,
      width: 300,
      heightAuto: true,
    })
  }

}
