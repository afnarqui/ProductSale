import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationRoutingModule} from './registration-routing.module';
import {SharedModule} from '../../../shared/shared.module';

//services
import { UserService } from '../../../services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  providers: [ UserService ],
  declarations: []
})
export class RegistrationModule { }
