import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewComponent } from './menu-view.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

const products = [
  {
    name:      "Miranda",
    price:     5,
    image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
    type:      "canceled",
    _id:       "123id123",
    dateEntry: "2022-03-17T16:31:48.929Z",
    createdAt: "2022-03-17T16:31:48.929Z",
    updatedAt: "2022-03-17T16:31:48.929Z",
  },
  {
    name:      "Diana",
    price:     10,
    image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
    type:      "breakfast",
    _id:       "321id321",
    dateEntry: "2022-03-17T17:31:48.929Z",
    createdAt: "2022-03-17T17:31:48.929Z",
    updatedAt: "2022-03-17T17:31:48.929Z",
  }
];

const order = {
    name:      "Diana",
    price:     10,
    image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
    type:      "breakfast",
    _id:       "321id321",
    qty:       1,
    totalPrice:9,
    dateEntry: "2022-03-17T17:31:48.929Z",
    createdAt: "2022-03-17T17:31:48.929Z",
    updatedAt: "2022-03-17T17:31:48.929Z",
  };

  const orders = [
    {
      name:      "Diana",
      price:     10,
      image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
      type:      "breakfast",
      _id:       "321id321",
      qty:       1,
      totalPrice:9,
      dateEntry: "2022-03-17T17:31:48.929Z",
      createdAt: "2022-03-17T17:31:48.929Z",
      updatedAt: "2022-03-17T17:31:48.929Z",
    },
    {
    name:      "Diana",
    price:     10,
    image:     "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?a054920",
    type:      "breakfast",
    _id:       "321id321",
    qty:       1,
    totalPrice:9,
    dateEntry: "2022-03-17T17:31:48.929Z",
    createdAt: "2022-03-17T17:31:48.929Z",
    updatedAt: "2022-03-17T17:31:48.929Z",
  }
]

describe('MenuViewComponent', () => {
  let component: MenuViewComponent;
  let fixture: ComponentFixture<MenuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuViewComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('variables allProducts and categories should has data', () => {
    let allProducts = component.allProducts;
    allProducts = products;

    expect(allProducts.length).toBe(2);
  });

  // it('filterCategories', () => {
  //   // const e = { target: {dataset: { value: "" }}}; 
  //   const mockEvent: Event = <Event><any>{
  //     target: {
  //       dataset: {
  //         value: "breakfast"   
  //       }   
  //     }
  //   };

  //   let result = component.filterCategories(mockEvent);

  //   expect(result).toEqual(products);
  // });

  // it('v', () => {
  //   let arrOrder = component.arrOrder;
  //   arrOrder = orders
  //   let result = component.addQty(order);

  //   expect(result).toEqual();
  // });


});
