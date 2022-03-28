import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewComponent } from './orders-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('OrdersViewComponent', () => {
  let component: OrdersViewComponent;
  let fixture: ComponentFixture<OrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersViewComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
