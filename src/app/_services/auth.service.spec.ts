import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy }
  let httpClientSpyGet : { get: jasmine.Spy}

  beforeEach(() => {
    let routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate'])
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get'])
    service = new AuthService(routerSpy as any, httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return token after login', (done: DoneFn) => {
    const mockUser = {
      email: 'waiter@burgerland.com',
      password: 'abc'
    }

    const mockResult = {
      token : '123456'
    }

    httpClientSpy.post.and.returnValue(of(mockResult))

    service.loginForm(mockUser)
    .subscribe(res => {
      expect(res).toEqual(mockResult);
      done()
    })
  })

  // it(''), (done: DoneFn) => {
  //   const mockResult = {
  //     roles: {
  //         admin: false,
  //         name: "meserx"
  //     },
  //     _id: "622aad76d1a4b35c16215013",
  //     email: "waitress@burgerland.com",
  //     password: "$2a$10$XtvsF79OHS3rvh1b7IjUi.r4V41vfHJ40t23SLzB3IiPvmslo7sUy",
  //     createdAt: <Date>,
  //     updatedAt: <Date>,
  //     nameUser: "Hallie"
  // }
    

  //   httpClientSpyGet.get.and.returnValue(of(mockResult))

  //   service.getUser()
  //   .subscribe(res => {
  //     expect(res).toEqual(mockResult);
  //     done()
  //   })
  // }
});
