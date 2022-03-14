import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { MenuViewComponent } from './menu-view.component';

const routes: Routes = [
  { 
    path: '',
    component: MenuViewComponent,
    children: [
      {
        path:'',
        pathMatch:'full', 
        redirectTo:'all'
      },
      {
        path:'all',
        component: AllComponent,
      },
      {
        path:'lunch',
        component: LunchComponent,
      },
      {
        path:'breakfast',
        component: BreakfastComponent,
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuViewRoutingModule {}