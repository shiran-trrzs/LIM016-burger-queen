import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LoginResponse {
  access_token: string;
  data: any;
  name: string;
  status: string;
  message: string;
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

  getAllUsers() {
    return this.http.get(this.basePath + 'users')
  }

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

  loginForm(data: any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'auth', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
