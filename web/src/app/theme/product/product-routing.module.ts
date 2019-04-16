import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    data: {
      title: 'Product',
      icon: 'icon-layout-cta-right',
      caption: 'variants color of nav bar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
