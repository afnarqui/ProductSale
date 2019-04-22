import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../config/setings';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { Category } from 'src/app/models/category.model';

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
  constructor(private translate: TranslateService,private http: HttpClient,
              private userService:UserService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
    this.userService.getCategory()
    .subscribe((data:any)=> {
      debugger
      this.arrayCategory = data
    },(error)=>{
      console.log(error)
    })
    this.userService.getProduct()
      .subscribe((data:any)=> {
        debugger
        this.arrayProduct = data
      },(error)=>{
        console.log(error)
      })
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  add(item) {
    debugger
    console.log(item);
  }
  disminuirUnProducto(item,index){
    console.log(item)
  }
  aumentarUnProducto(item,index){
    console.log(item)
      debugger

     let url = item['photo']
     let name = item['name']
     let price = item['price']
     let id = item['id']
     let existe =  0
     let arrayProductSeleccionTemporal =  []
     let contarProductosConElMismoId = this.arrayProductSeleccion.filter( item => item.id == id)
     if(contarProductosConElMismoId.length > 0){

         return
     } else {
      this.arrayProductSeleccion.push({
        name:name,
        photo:url,
        price:price,
        id: id
      })
     }

     debugger
      // for(let i = 0;i < this.arrayProduct.length;i++){
      //   if(this.arrayProductSeleccion[i].id === id){
      //     existe = 1
      //   } else {
      //     arrayProductSeleccionTemporal.push({
      //       name:this.arrayProductSeleccion[i].name,
      //       photo:this.arrayProductSeleccion[i].photo,
      //       price:this.arrayProductSeleccion[i].price,
      //       id: this.arrayProductSeleccion[i].id
      //     })
      //   }
      // }
      // if (existe === 0 && this.arrayProductSeleccion.length>1){
      //   this.arrayProductSeleccion = arrayProductSeleccionTemporal;
      // }else {
      //   this.arrayProductSeleccion.push({
      //     name:name,
      //     photo:url,
      //     price:price,
      //     id: id
      //   })
      // }






      // this.listaProductosSeleccionados[index]['cantidad'] = nuevaCantidad
      // let valorTotalVentaNum = 0
      // valorTotalVentaNum = Number(this.valorTotalVenta) +  Number(item['valorVenta'])
      // this.valorTotalVenta = valorTotalVentaNum

      // let valorTotalProductosNum = 0
      // valorTotalProductosNum = Number(this.valorTotalProductos) +  Number(item['valorProducto'])
      // this.valorTotalProductos = valorTotalProductosNum

  }
}
