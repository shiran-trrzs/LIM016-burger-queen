import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model: any = {};

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {} 

  login() {
    this.model.action = 'login';
    this.authService.loginForm(this.model).subscribe({
      next: response => {
        if (response.token) {
          console.log(response.token)
          this.authService.setUser(response);
        }
      }, 
      error: error => {
        console.error(error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }
  
}
