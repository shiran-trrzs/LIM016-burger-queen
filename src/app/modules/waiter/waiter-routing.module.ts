import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';

const routes: Routes = [
    { path: 'waiter',
      pathMatch:'full', 
      redirectTo:'menu'
   },
   { path: 'menu',
     component: MenuViewComponent,
   },
   { path: 'orders',
     component: OrdersViewComponent,
   }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class WaiterRoutingModule {}
