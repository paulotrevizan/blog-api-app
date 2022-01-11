import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PostsFormComponent } from './posts-form/posts-form.component'
import { PostsListaComponent } from './posts-lista/posts-lista.component';
import { PostsViewComponent } from './posts-view/posts-view.component';

const routes: Routes = [
  { path: "posts", component: LayoutComponent, children: [
    { path: "form", component: PostsFormComponent, canActivate: [AuthGuard]},
    { path: "view/:id", component: PostsViewComponent},
    { path: "lista", component: PostsListaComponent, canActivate: [AuthGuard]},
    { path: "", redirectTo: '/posts/lista', pathMatch: 'full' }  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
