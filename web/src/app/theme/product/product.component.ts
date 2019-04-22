import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../config/setings';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../services/firebase/firebase-storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public activeLang = LANGUAGE;
  @ViewChild('imagenProducto') imagenProducto: ElementRef;
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
<<<<<<< HEAD

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
=======
  public archivoForms = new FormGroup({
    archivos: new FormControl(null, Validators.required),
  });


  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public datosFormularios = new FormData();
>>>>>>> feature
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
<<<<<<< HEAD
=======
  description
  name
  price
>>>>>>> feature

  constructor(private translate: TranslateService, private service: UserService,
              private firebaseStorage: FirebaseStorageService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
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
<<<<<<< HEAD
      this.subirArchivo();
=======
      this.subirArchivos();
>>>>>>> feature
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

<<<<<<< HEAD
  public subirArchivo() {
=======
  public subirArchivos() {
>>>>>>> feature
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
<<<<<<< HEAD
=======
  public subirArchivoss() {
    let description = this.description
    let name = this.name
    let price = this.price
    debugger
  }
>>>>>>> feature
}
