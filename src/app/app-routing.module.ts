import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

const routes: Routes = [

    {path: '', pathMatch:'full', redirectTo:'Home'},
    {path: 'Home', component: SharedModule},
    {path: 'WaiterPanel', component: SharedModule},
    {path: 'ChefPanel', component: SharedModule} 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }