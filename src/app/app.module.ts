import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { PostsModule } from './posts/posts.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './posts.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { LayoutComponent } from './layout/layout.component';
import { AlbunsModule } from './albuns/albuns.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularEditorModule,
    TemplateModule,
    PostsModule,
    FormsModule,
    AlbunsModule
  ],
  providers: [
    PostsService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
