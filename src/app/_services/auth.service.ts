import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LoginResponse {
  access_token: string;
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

  getAllUsers() {
    return this.http.get(this.basePath + 'users')
  }

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

  loginForm(data: any): Observable <LoginResponse> {
    let response: any = this.http
      .post<LoginResponse>(this.basePath + 'auth', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
    return response
  }

}
