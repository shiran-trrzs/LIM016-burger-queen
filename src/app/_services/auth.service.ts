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

interface User {
  roles:     Roles;
  _id:       string;
  email:     string;
  password:  string;
  createdAt: Date;
  updatedAt: Date;
}

interface Roles {
  admin: boolean;
  name:  string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private basePath = 'https://bbqueen.herokuapp.com/';
  public user = {
    email: '',
    roles: {
      admin: false,
      name: '',
    },
  }

  // private token = ''

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { 
  }
  
  token = localStorage.getItem('token')
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Bearer-Token': `${this.token}`,
      'Authorization' : `Bearer ${this.token}`
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

  // Get email and password from server to capture the token
  loginForm(data: LoginPayload): Observable <LoginResponse> {
   this.user.email= data.email
   return this.http
      .post<LoginResponse>(this.basePath + 'auth', data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //  After login save token and other values(if any) in localStorage
  setUser(resp: LoginResponse) {
    localStorage.setItem('token', resp.token);
    this.token = resp.token
    this.getUser().subscribe((res) => {
      console.log(res.roles.name)
      localStorage.setItem('rol', res.roles.name);
    })
    this.router.navigate(['/waiter']);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  // Get data from backend (users object)
  getData(data: LoginPayload): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'users', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Captures the email address to identify which user is logging in
  getUser(): Observable<User> {
    return this.http
    .get<User>(this.basePath + `users/${this.user.email}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // getUser(email:string): Observable<User> {
  //   return this.http.get<User>(this.basePath + `users/${email}`);
  // }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/aboutus']);
  }

}
