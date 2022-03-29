import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPanelComponent } from './chef-panel.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChefPanelComponent', () => {
  let component: ChefPanelComponent;
  let fixture: ComponentFixture<ChefPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefPanelComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
