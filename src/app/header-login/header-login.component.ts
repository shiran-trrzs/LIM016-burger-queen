import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent {

  constructor(
    private appService: AuthService
  ) {}

  ngOnInit(): void {
    this.appService.loginForm
  }

}
