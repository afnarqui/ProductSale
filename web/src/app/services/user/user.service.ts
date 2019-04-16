import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/setings';
import { Observable } from 'rxjs';
import { IUserHttp } from '../../models/http-models/user-http.interface';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  isLogged() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user') );
    } else {
      this.token = '';
      this.user = null;
    }

  }

  saveStorage( id: string, token: string, user: User ) {
    debugger
    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('user', JSON.stringify(user) );

    this.user = user;
    this.token = token;
  }

  logout() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/']);
  }

  login( user: User, remember: boolean = false ) {

    if ( remember ) {
      localStorage.setItem('email', user.email );
    }else {
      localStorage.removeItem('email');
    }

     let url = URL_SERVICIOS + 'api/Persons';

    debugger
    // return this.http.get(  )
    // let urls = "http://127.0.0.1:8000/login";
   return this.http.post( url, user )
                .map( (resp: any[]) => {

                  if(resp!==null){
                    const myId = uuid.v4();
                    user['remember_toke'] = myId;
                    let id = user['id'];
                    this.saveStorage(id, myId, user );
                    console.log(resp);
                  }
                  return resp;
                }, (error) => {
                  debugger
                  console.log(error)
                }
                );

  }

  /**
   *
   * @param user create user in database
   */
  createUser( user: User ) {
    let url = URL_SERVICIOS + 'api/Person';
    debugger
    return this.http.post( url, user )
              .map( (resp: any) => {
                debugger
                //swal('created user', user.email, 'success' );
                return resp;
              },(error)=> {
                debugger
                console.log(error)
              });
  }

  getUsers(): Observable<IUserHttp> {
    let url = URL_SERVICIOS + '/users';
    return this.http.get<IUserHttp>(url);
  }
}
