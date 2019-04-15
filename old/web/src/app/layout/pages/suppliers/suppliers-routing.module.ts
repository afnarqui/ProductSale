import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuppliersComponent} from './suppliers.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    data: {
      title: 'Suppliers',
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
export class SuppliersRoutingModule { }
