import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { AuthService } from '../../../_services/auth.service';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from 'src/app/interface/loginInterface';
 
describe('FormComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let service: AuthService;
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

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

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

  it('should return an error message when data is incomplete', (done: DoneFn) => {

    const data = {
      email: "",
      password: "datapassword123"
    }

    const basePath = 'https://bbqueen.herokuapp.com/';
    const errorResponse = "No ingresaste correo o contraseña";
  
     httpClient.post<LoginResponse>(basePath + 'auth', data).subscribe({
      next: () => done.fail('should have failed with the 404 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.error).withContext('message').toEqual(errorResponse);
        done();
      },
    });

    const req = httpTestingController.expectOne(basePath + 'auth');
  req.flush(errorResponse, { status: 404, statusText: 'Not Found' });

  }, 10000);

  it('The value of requestFailed should return true when there is a login error', () => {
    const email = component.validateForm.controls['email']
    const password = component.validateForm.controls['password']
    email.setValue('hannah@burgerland.com')
    password.setValue('12345')

    expect(component.validateForm.invalid).toBeFalse()
  });

});
