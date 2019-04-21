import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    data: {
      title: 'gallery',
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
export class GalleryRoutingModule { }
