import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadImageComponent} from './upload-image.component';

const routes: Routes = [
  {
    path: '',
    component: UploadImageComponent,
    data: {
      title: 'UploadImage',
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
export class UploadImageRoutingModule { }
