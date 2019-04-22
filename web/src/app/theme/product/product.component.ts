import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../config/setings';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../services/firebase/firebase-storage.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('alert') alert: ElementRef;
  public activeLang = LANGUAGE;
  @ViewChild('imagenProducto') imagenProducto: ElementRef;
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  public archivoForms = new FormGroup({
    archivos: new FormControl(null, Validators.required),
  });


  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public datosFormularios = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  description
  name
  price
  dataselect: datosSelect[] = []
  inputGroupSelect
  id
  arrayCategory = []
  product: Product = {
    name: null,
    price: null,
    description: null,
    photo: '',
    idCategory: null,
    idUser: null,
    id: null
  };
  arrayProduct =  []
  constructor(private translate: TranslateService, private service: UserService,
              private firebaseStorage: FirebaseStorageService) {
    this.translate.setDefaultLang(this.activeLang);

   }

  ngOnInit() {
    this.service.getCategory()
    .subscribe((data:any)=> {
      debugger
      this.dataselect = data
    },(error)=>{
      console.log(error)
    })
    this.service.getProduct()
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

   public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
      this.subirArchivos();
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  public subirArchivos() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      this.imagenProducto['src'] = URL;
    });
  }
  public save() {
    let name = this.name
    let price = this.price
    let description = this.description
    let url = this.URLPublica
    let idcategory = this.inputGroupSelect
    let idnuevo = this.id
    if(idcategory === undefined){
      this.closeAlert();
      return;
    }
    debugger
    if ( localStorage.getItem('id')) {
      const id = localStorage.getItem('id');
      const product = {
        name: name,
        price: price,
        description: description,
        photo: url,
        idCategory: idcategory,
        idUser: id,
        id: idnuevo
      };
      console.log(product);
      if(idnuevo!==undefined){
        this.service.actualizarProduct(product)
        .subscribe((response) => {

          if (response !== null) {
            this.arrayProduct = response;
            this.clear()
          }
          console.log(response);
        },(error)=>{
          this.clear()
          console.log(error)
        })
      }else {
        this.service.createProduct(product)
        .subscribe((response) => {

          if (response !== null) {
            this.arrayProduct = response;
            this.clear()
          }
          console.log(response);
        },(error)=>{
          this.clear()
          console.log(error)
        })
      }

    } else {
      debugger
      return;
    }

  }
  valoresSelect(data:string){
    let index = data['currentTarget']['selectedIndex']
    let valor = data['target'][index]['innerText']
    let nuevoValor = valor.split('/');
    this.inputGroupSelect = nuevoValor[1]
    this.inputGroupSelect = this.inputGroupSelect.replace(/ /g, '');
  }
  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
  clear() {
    this.price = 0;
    this.name = '';
    this.description = '';
    this.URLPublica = '';
    this.inputGroupSelect = undefined;
    this.id = undefined
  }
  actualizar(item){
    console.log(item)
    this.price = Number(item['price']);
    this.name = item['name'];
    this.description = item['description'];
    this.URLPublica = item['photo'];
    this.inputGroupSelect = item['idCategory'];
    this.id = item['id']
    debugger
  }
  delete(item) {
    debugger
    let produc: Product = new Product(
      item['name'], item['price'], item['description'],item['photo'], item['idCategory'], item['idUser'], item['id']);

    if(produc['id'] !== null){
      this.service.deleteProduct(produc)
      .subscribe((response)=>{
        debugger
        this.clear()
        if(response!==null){
          this.arrayProduct = response
          this.clear()
          debugger
        }
        console.log(response);
      },(error)=>{
        this.clear()
        console.log(error);
      });
    }
  }
}
class datosSelect {
  public nombre:string;
  public id:string;
}
