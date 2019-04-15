import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//services
import { UserService } from '../../../services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [
    UserService],
  declarations: []
})
export class LoginModule { }
