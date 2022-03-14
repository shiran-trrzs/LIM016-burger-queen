import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuViewComponent } from './menu-view.component';



const routes: Routes = [
  { 
    path: '',
    component: MenuViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuViewRoutingModule {}