import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginResponse, LoginPayload, User, Roles, Products, NewOrder, OrderInfo, Status } from '../interface/loginInterface';

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

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { 
  }
  
  token = localStorage.getItem('token')
  
  httpOptions = () => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${this.token}`
    })
  });

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get email and password from server to capture the token
  loginForm(data: LoginPayload): Observable <LoginResponse> {
   this.user.email= data.email
   return this.http
      .post<LoginResponse>(this.basePath + 'auth', data)
      // .pipe(
      //   retry(2),
      //   catchError(this.handleError)
      // );
  }

    // Get data from backend (users object) | Revisar si lo necesitamos
    getData(data: LoginPayload): Observable<LoginResponse> {
      return this.http
        .post<LoginResponse>(this.basePath + 'users', data, this.httpOptions())
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
      localStorage.setItem('idUser', res._id);
      localStorage.setItem('username', res.nameUser)
     console.log(res)
      if (res.roles.name === 'chef') {
        console.log('Log in chef')
        this.router.navigate(['/chef']);
      } else if (res.roles.name === 'meserx') {
        console.log('Log in meserx')
        this.router.navigate(['/waiter'])
      }
      localStorage.setItem('rol', res.roles.name);
    })
    
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  // Captures the email address to identify which user is logging in
  getUser(): Observable<User> {
    return this.http
    .get<User>(this.basePath + `users/${this.user.email}`, this.httpOptions())
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    // this.router.navigate(['Home/aboutus']);
  }

  // Get json with all products
  getProducts(): Observable<Products> {
    return this.http
    .get<Products>(this.basePath + 'products?limit=12', this.httpOptions())
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  newOrder(data: OrderInfo): Observable<NewOrder> {
    return this.http
    .post<NewOrder>(this.basePath+ 'orders', data, this.httpOptions())
  }

  // Get json with all orders
  getOrders(): Observable<NewOrder> {
    return this.http
    .get<NewOrder>(this.basePath + 'orders?limit=100', this.httpOptions())
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  changeStatusOrder(idOrder: string, data: Status ): Observable<NewOrder> {
    return this.http
    .put<NewOrder>(this.basePath+ `orders/${idOrder}`, data, this.httpOptions())
  }


}
