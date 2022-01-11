import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostsListaComponent } from './posts-lista/posts-lista.component';
import { PostsViewComponent } from './posts-view/posts-view.component';


@NgModule({
  declarations: [PostsFormComponent, PostsListaComponent, PostsViewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    AngularEditorModule
  ],
  exports: [
    PostsFormComponent,
    PostsListaComponent,
    PostsViewComponent
  ]
})
export class PostsModule { }
