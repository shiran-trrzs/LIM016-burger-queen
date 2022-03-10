import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundMessageComponent } from './modules/not-found/not-found-message/not-found-message.component';
import { HeaderLoginComponent } from './header-login/header-login.component';

const routes: Routes = [  
    {
        path: '', 
        pathMatch:'full', 
        redirectTo:'Home'
    },
    {
        path:'',
        component: HeaderLoginComponent,
        children: [
          {
            path:'Home',
            loadChildren: ()=>
            import ('./modules/login/login.module').then((m)=> m.LoginModule)
          }
        ]
    },
    {
        path: '**',
        component: NotFoundMessageComponent
    },
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }