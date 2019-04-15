import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
//services
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private userService:UserService,
              private router:Router){}

  canActivate(){

    if(this.userService.isLogged()){
      return true;
    } return true;
  }
}
