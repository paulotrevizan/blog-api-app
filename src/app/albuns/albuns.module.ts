import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbunsFormComponent } from './albuns-form/albuns-form.component';
import { FormsModule } from '@angular/forms';
import { AlbunsFotoFormComponent } from './albuns-foto-form/albuns-foto-form.component';
import { AlbunsListaComponent } from './albuns-lista/albuns-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AlbunsViewComponent } from './albuns-view/albuns-view.component';
import { AlbunsMainViewComponent } from './albuns-main-view/albuns-main-view.component';


@NgModule({
  declarations: [AlbunsFormComponent, AlbunsFotoFormComponent, AlbunsListaComponent, AlbunsViewComponent, AlbunsMainViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxGalleryModule,
    AlbunsRoutingModule
  ],
  exports: [
    AlbunsFormComponent,
    AlbunsFotoFormComponent,
    AlbunsListaComponent,
    AlbunsViewComponent
  ]
})
export class AlbunsModule { }
