import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let serviceGet: AuthService;
  let servicePut: AuthService;
  let httpClientSpy: { post: jasmine.Spy }
  let httpClientSpyGet : { get: jasmine.Spy}
  let httpClientSpyPut : { put: jasmine.Spy}

  beforeEach(() => {
    let routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate'])
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpyPut = jasmine.createSpyObj('HttpClient', ['put'])
    service = new AuthService(routerSpy as any, httpClientSpy as any)
    serviceGet = new AuthService(routerSpy as any, httpClientSpyGet as any)
    servicePut = new AuthService(routerSpy as any, httpClientSpyPut as any)
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

  it('should return user data from user collection', (done: DoneFn) => {
    const mockResult = {
      roles: {
          admin: false,
          name: "meserx"
      },
      _id: "622aad76d1a4b35c16215013",
      email: "waitress@burgerland.com",
      password: "$2a$10$XtvsF79OHS3rvh1b7IjUi.r4V41vfHJ40t23SLzB3IiPvmslo7sUy",
      createdAt: new Date(),
      updatedAt: new Date(),
      nameUser: "Hallie"
  }


    httpClientSpyGet.get.and.returnValue(of(mockResult))

    serviceGet.getUser()
    .subscribe(res => {
      expect(res).toEqual(mockResult);
      done()
    })
  })

  it('should create new order', (done: DoneFn) => {
    const OrderInfo = {
      userId:   "123userId123",
      client:   "Hannah Montana",
      products: [{
        qty:       1,
        productId: "6br7455rb7",
      }]
    }

    const NewOrder = {
      _id:           "123idOrder123",
      userId:        "123userId123",
      client:        "Hannah Montana",
      products:      [{
        qty:     1,
        product: {
          _id:        "123idProduct123",
          name:      "Coke",
          price:     5,
          image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
          type:      "dinner",
          dateEntry: "2022-03-14T17:07:35.670Z",
          createdAt: "2022-03-14T17:07:35.670Z",
          updatedAt: "2022-03-14T17:07:35.670Z",
      },
        _id:     "123anotherId123",
    }],
      status:        "pending",
      dateEntry:     "2022-03-14T17:07:35.670Z",
      dateProcessed: "2022-03-14T17:07:35.670Z",
      createdAt:     "2022-03-14T17:07:35.670Z",
      updatedAt:     "2022-03-14T17:07:35.670Z",
  }

  httpClientSpy.post.and.returnValue(of(NewOrder))

  service.newOrder(OrderInfo)
    .subscribe(res => {
      expect(res).toEqual(NewOrder);
      done()
    })
  })

  it('the order status should be changed', (done: DoneFn) => {

    const idOrder = "123idOrder123";

    const objStatus = {
      status: "delivering"
    }

    const mockResult = {
          "_id": "123idOrder123",
          "userId": "622aac2dd1a4b35c1621500e",
          "client": "Shiran ",
          "products": [
              {
                  "qty": 1,
                  "product": {
                      "_id": "622f7685fdae5851e3ff9bbe",
                      "name": "Capuccino",
                      "price": 7,
                      "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?alt=media&token=253ee6ca-a626-4b96-816e-2f5612054920",
                      "type": "breakfast",
                      "dateEntry": "2022-03-14T17:08:21.353Z",
                      "createdAt": "2022-03-14T17:08:21.353Z",
                      "updatedAt": "2022-03-14T17:08:21.353Z"
                  },
                  "_id": "623358a44e9deea789252d16"
              },
              {
                  "qty": 1,
                  "product": {
                      "_id": "622f7657fdae5851e3ff9bbb",
                      "name": "Bottle water 500ml",
                      "price": 5,
                      "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/bottle.png?alt=media&token=e1d43411-72b9-4382-882d-361415a9a98a",
                      "type": "lunch",
                      "dateEntry": "2022-03-14T17:07:35.670Z",
                      "createdAt": "2022-03-14T17:07:35.670Z",
                      "updatedAt": "2022-03-14T17:07:35.670Z"
                  },
                  "_id": "623358a44e9deea789252d17"
              }
          ],
          "status": "delivering",
          "dateEntry": "2022-03-17T15:49:56.390Z",
          "dateProcessed": "2022-03-17T15:49:56.390Z",
          "createdAt": "2022-03-17T15:49:56.393Z",
          "updatedAt": "2022-03-25T00:09:28.568Z"
    }

    httpClientSpyPut.put.and.returnValue(of(mockResult))

    servicePut.changeStatusOrder(idOrder, objStatus)
    .subscribe(res => {
      expect(res).toEqual(mockResult);
      done()
    })
  })



});
