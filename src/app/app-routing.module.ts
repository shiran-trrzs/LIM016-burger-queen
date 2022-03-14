import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundMessageComponent } from './modules/not-found/not-found-message/not-found-message.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { WaiterPanelComponent } from './waiter-panel/waiter-panel.component';
import { AuthGuard } from './_guards/auth.guard';
import { ChefPanelComponent } from './modules/chef/chef-panel/chef-panel.component';

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
        path: 'waiter',
        canActivate: [AuthGuard],
        component: WaiterPanelComponent,
        children: [
            {
              path:'',
              pathMatch:'full', 
              redirectTo:'menu'
            },
            {
                path:'menu',
                loadChildren: ()=> 
                import ('./modules/waiter/menu-view/menu-view.module').then((m)=> m.MenuViewModule)
            }

            // {
            //     path:'orders',
            //     loadChildren: ()=>
            //     import ('./modules/waiter/orders-view/orders-view.module').then((m)=> m.OrdersViewModule)
            // }
        ]
    },
    {
        path: 'chef',
        canActivate: [AuthGuard],
        component: ChefPanelComponent
    },
    {
        path: '**',
        component: NotFoundMessageComponent
    }
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