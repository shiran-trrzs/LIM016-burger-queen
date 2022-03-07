import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { WaiterPanelComponent } from './waiter-panel/waiter-panel.component';


@NgModule({
  declarations: [ 
    WaiterPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule
  ]
})
export class ModulesModule { }
