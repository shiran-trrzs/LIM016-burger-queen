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
          console.log(response.token)
          this.authService.setUser(response);
        }
      }, 
      error: (err) => {
        this.showError(form);
        console.log(err.error.message);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  showError(form: LoginPayload) {

    if(form.email == '' && form.password !== '') {
      this. emailFailed= true;
      this.messagePasswordError = '';
      this.messageError = '';
      this.messageEmailError = 'Email is missing';
    } else if (form.password == '' && form.email !== '') {
      this. passwordFailed= true;
      this.messageError = '';
      this.messageEmailError = '';
      this.messagePasswordError = ' Password is missing';
    } else { 
      this.requestFailed = true;
      this.messageEmailError = '';
      this.messagePasswordError = '';
      this.messageError = 'Something bad happened; please try again';
    }
   
  }
  
}