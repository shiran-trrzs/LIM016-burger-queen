import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesModule } from './modules/modules.module';
import { HttpClientModule } from '@angular/common/http'; // to make HTTP calls

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { WaiterPanelComponent } from './waiter-panel/waiter-panel.component';
import { ChefPanelComponent } from './chef-panel/chef-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    WaiterPanelComponent,
    ChefPanelComponent,
  ],
  imports: [
    AppRoutingModule,
    ModulesModule,
    HttpClientModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
  
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
