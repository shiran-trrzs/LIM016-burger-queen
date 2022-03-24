import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginPayload } from 'src/app/interface/loginInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {} 

  validateForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(form: LoginPayload) {
    console.log(typeof form)
    const loginData = {
      email: form.email,
      password: form.password
    }

    this.authService.loginForm(loginData).subscribe({
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
