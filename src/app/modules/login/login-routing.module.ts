import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
  { path: '',
    component: QuoteComponent,
 },
 { path: 'login',
   component: FormComponent,
 },
 { path: 'aboutus',
   component: AboutUsComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
