import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginResponse } from '../interface/loginInterface';

interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  basePath = 'https://bbqueen.herokuapp.com/';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  loginForm(data: LoginPayload): Observable <LoginResponse> {
   return this.http
      .post<LoginResponse>(this.basePath + 'auth', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  setUser(resp: LoginResponse) {
    localStorage.setItem('token', resp.token);
    this.router.navigate(['/aboutus']);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getData(data: LoginPayload): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'users', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
