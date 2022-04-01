import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-waiter-panel',
  templateUrl: './waiter-panel.component.html',
  styleUrls: ['./waiter-panel.component.scss']
})
export class WaiterPanelComponent implements OnInit {

  name!: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const meserx = localStorage.getItem('username')
    this.name = meserx
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