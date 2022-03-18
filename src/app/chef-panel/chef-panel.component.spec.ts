import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPanelComponent } from './chef-panel.component';

describe('ChefPanelComponent', () => {
  let component: ChefPanelComponent;
  let fixture: ComponentFixture<ChefPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefPanelComponent ]
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
