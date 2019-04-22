import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Category } from '../../models/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/setings';
import { Observable } from 'rxjs';
import { IUserHttp } from '../../models/http-models/user-http.interface';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { ICategoryHttp } from 'src/app/models/http-models/category-http.interface';
import { Product } from 'src/app/models/product.model';
import { IProductHttp } from 'src/app/models/http-models/product-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;
  category: Category;

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

   return this.http.post( url, user )
                .map( (resp: User) => {

                  if(resp!==null){
                    const myId = uuid.v4();
                    resp['remember_toke'] = myId;
                    let id = resp['id'];

                    this.saveStorage(id, myId, resp );
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
    return this.http.post( url, user )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }
  actualizarCategory( category: Category ) {
    let url = URL_SERVICIOS + 'api/Categorys';
    return this.http.post( url, category )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }

  deleteCategory( category: Category ) {
    let url = URL_SERVICIOS + 'api/Categor';
    return this.http.post( url, category )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }

  createCategory( category: Category ) {
    let url = URL_SERVICIOS + 'api/Category';
    return this.http.post( url, category )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }

  createProduct( product: Product ) {
      let url = URL_SERVICIOS + 'api/Product';
      return this.http.post( url, product )
                .map( (resp: any) => {
                  return resp;
                },(error)=> {
                  console.log(error)
                });
  }

  actualizarProduct( produc: Product ) {
    let url = URL_SERVICIOS + 'api/Products';
    return this.http.post( url, produc )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }

  deleteProduct( produ: Product ) {
    let url = URL_SERVICIOS + 'api/Produc';
    return this.http.post( url, produ )
              .map( (resp: any) => {
                return resp;
              },(error)=> {
                console.log(error)
              });
  }


  getUsers(): Observable<IUserHttp> {
    let url = URL_SERVICIOS + '/users';
    return this.http.get<IUserHttp>(url);
  }
  getCategory(): Observable<ICategoryHttp> {
    let url = URL_SERVICIOS + 'api/Categorys';
    return this.http.get<ICategoryHttp>(url);
  }
  getProduct(): Observable<IProductHttp> {
    let url = URL_SERVICIOS + 'api/Products';
    return this.http.get<IProductHttp>(url);
  }
}
