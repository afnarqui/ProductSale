import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { SuppliersComponent } from './layout/pages/suppliers/suppliers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      {
        path: '',
        redirectTo: 'login/simple',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './theme/auth/login/basic-login/basic-login.module#BasicLoginModule'
      },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'navigation',
        loadChildren: './theme/navigation/navigation.module#NavigationModule'
      },
      {
        path: 'home',
        loadChildren: './theme/home/home.module#HomeModule',
      },
      {
        path: 'widget',
        loadChildren: './theme/widget/widget.module#WidgetModule'
      },
      {
        path: 'basic',
        loadChildren: './theme/ui-elements/basic/basic.module#BasicModule'
      },
      {
        path: 'map',
        loadChildren: './theme/map/map.module#MapModule'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      {
        path: 'auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
