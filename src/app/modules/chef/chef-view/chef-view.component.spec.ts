import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefViewComponent } from './chef-view.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('ChefViewComponent', () => {
  let component: ChefViewComponent;
  let fixture: ComponentFixture<ChefViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefViewComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
