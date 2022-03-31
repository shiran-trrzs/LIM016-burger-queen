import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FormComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return invalid form', () => {
    const email = component.validateForm.controls['email']
    email.setValue('waitress@burgerland.com')

    expect(component.validateForm.invalid).toBeTrue()
  });

  it('Should return valid form', () => {
    const email = component.validateForm.controls['email']
    const password = component.validateForm.controls['password']
    email.setValue('hannah@burgerland.com')
    password.setValue('12345')

    expect(component.validateForm.invalid).toBeFalse()
  });

  it('Should update user data', () => {
    const email = component.validateForm.controls['email']
    const password = component.validateForm.controls['password']
    email.setValue('waiter@burgerland.com')
    password.setValue('changeme')

    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    const testData = {
      email: 'waiter@burgerland.com',
      password: 'changeme'
    }
    expect(component.loginData).toEqual(testData)
  });

  


});
