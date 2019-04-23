import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category = {
    nombre: null,
    id: null
  };
  arrayCategory = []
  public datosFormularios = new FormData();
  public archivoForms = new FormGroup({
    archivos: new FormControl(null, Validators.required),
  });
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getCategory()
      .subscribe((data:any)=> {

        this.arrayCategory = data
      },(error)=>{
        console.log(error)
      })
  }

  saveFile() {
    let categorys: Category = new Category(this.category.nombre, this.category.id);

    if(categorys['id'] !== null){
      this.userService.actualizarCategory(categorys)
      .subscribe((response)=>{

        if(response!==null){
          this.arrayCategory = response
          this.clear()

        }
        console.log(response);
      },(error)=>{
        this.clear()
        console.log(error);
      });
    } else {
      this.userService.createCategory(categorys)
      .subscribe((response) => {

        if (response !== null) {
          this.arrayCategory = response;
          this.clear()
        }
        console.log(response);
      },(error)=>{
        this.clear()
        console.log(error)
      })
    }

  }

  actualizar(item) {
    console.log(item)
    this.category.id = item['id'];
    this.category.nombre = item['nombre'];


  }
  clear() {
    this.category.id = null;
    this.category.nombre = '';
  }
  delete(item) {
    let categorys: Category = new Category(item['nombre'], item['id']);

    if(categorys['id'] !== null){
      this.userService.deleteCategory(categorys)
      .subscribe((response)=>{

        if(response!==null){
          this.arrayCategory = response
          this.clear()

        }
        console.log(response);
      },(error)=>{
        this.clear()
        console.log(error);
      });
    }
  }
}
