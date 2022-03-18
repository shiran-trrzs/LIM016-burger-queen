import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefViewComponent } from './chef-view.component';

const routes: Routes = [
  { 
    path: '',
    component: ChefViewComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChefViewRoutingModule { }
