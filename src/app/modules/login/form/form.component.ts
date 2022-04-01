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

  loginData !: LoginPayload;
  messageError !: string; 
  messageEmailError !: string;
  messagePasswordError !: string;
  requestFailed: boolean = false;
  emailFailed: boolean = false;
  passwordFailed: boolean = false;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {} 

  validateForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  login(form: LoginPayload) {

    this.loginData = {
      email: form.email,
      password: form.password
    }

    this.authService.loginForm(this.loginData).subscribe({
      next: response => {
        if (response.token) {
          this.authService.setUser(response);
        }
      }, 
      error: (err) => {
        this.requestFailed = true;
        this.messageError = err.error.message;
      },
    });
  }
  
}