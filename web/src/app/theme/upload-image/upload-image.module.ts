import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import {UploadImageRoutingModule} from './upload-image-routing.module';
import {SharedModule} from '../../shared/shared.module';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    SharedModule ,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  declarations: [UploadImageComponent]
})
export class UploadImageModule { }
