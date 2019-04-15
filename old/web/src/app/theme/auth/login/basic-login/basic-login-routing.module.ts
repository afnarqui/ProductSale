import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {BasicLoginComponent} from './basic-login.component';
// guard
import { LoginGuardGuard } from '../../../../services/guards/login-guard.guard'

const routes: Routes = [
  {
    path: '',
    component: BasicLoginComponent,
    canActivate: [ LoginGuardGuard ],
    data: {
      title: 'Simple Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [ LoginGuardGuard ]
})
export class BasicLoginRoutingModule { }
