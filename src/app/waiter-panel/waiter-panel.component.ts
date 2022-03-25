import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2'

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
    // setTimeout(() => {
    //   console.log('hi bish');
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'You are successfully logged out!',
    //     showConfirmButton: false,
    //     timer: 1000
    //   })
    // }, 1000)
  }

}
