import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../config/setings';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { Category } from 'src/app/models/category.model';
import { Shopping } from 'src/app/models/shopping.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public activeLang = LANGUAGE;
  category: Category = {
    nombre: null,
    id: null
  };
  arrayCategory = []
  arrayProduct  = []
  arrayProductSeleccion = []
  totalPrice = 0;
  constructor(private translate: TranslateService,private http: HttpClient,
              private userService:UserService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
    this.userService.getCategory()
    .subscribe((data:any)=> {

      this.arrayCategory = data
    },(error)=>{
      console.log(error)
    })
    this.userService.getProduct()
      .subscribe((data:any)=> {

        this.arrayProduct = data
      },(error)=>{
        console.log(error)
      });
      this.createOrUpdateShopping('B', 0, null);
  }

  private createOrUpdateShopping(status: string, idPruduct: number, id: any) {
    const idUser = Number(localStorage.getItem('id'));
    const shopping: Shopping = new Shopping(status, idPruduct, idUser, id);
   if(status==='B'){
    this.userService.searchShopping(shopping)
    .subscribe((data: any) => {
      this.arrayProductSeleccion = data;
      for ( let i = 0; i < this.arrayProductSeleccion.length; i ++) {
        this.totalPrice = Number(this.totalPrice) + Number(this.arrayProductSeleccion[i].price);
      }
    }, (error) => {
      console.log(error);
    });
   }else {
    this.userService.Updated(shopping)
    .subscribe((data: any) => {
      this.arrayProductSeleccion = data;
    }, (error) => {
      console.log(error);
    });
   }
  }

  creatShopping() {
    if ( this.arrayProductSeleccion.length > 0 ) {
      const idUser = Number(localStorage.getItem('id'));
      const status = 'P';
      for ( let i = 0; i < this.arrayProductSeleccion.length; i ++) {
        let idProduct = this.arrayProductSeleccion[i].idProduct;

        let shopping: Shopping =
        new Shopping(status, idProduct , idUser , this.arrayProductSeleccion[i].ids);
        this.userService.creatShopping(shopping)
        .subscribe((data: any) => {
          this.createOrUpdateShopping('B', 0, null);
        }, (error) => {
          this.createOrUpdateShopping('B', 0, null);
        });
        this.totalPrice = 0;
      }
    }
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  aumentarUnProducto(item, index){

    let url = item['photo']
     let name = item['name']
     let price = item['price']
     let id = item['id']
     let existe =  0
     let arrayProductSeleccionTemporal =  []
     debugger
     let contarProductosConElMismoId = this.arrayProductSeleccion.filter( item => item.id == id)
     if(contarProductosConElMismoId.length > 0){
        return
     } else {
       debugger
      this.arrayProductSeleccion.push({
        name:name,
        photo:url,
        price:price,
        id: id
      })
      this.totalPrice = Number(this.totalPrice) + Number(price);
      debugger
      this.createOrUpdateShopping('G', id, null);
     }
  }
}
