import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { AlbunsFormComponent } from './albuns-form/albuns-form.component';
import { AlbunsFotoFormComponent } from './albuns-foto-form/albuns-foto-form.component';
import { AlbunsListaComponent } from './albuns-lista/albuns-lista.component';
import { AlbunsMainViewComponent } from './albuns-main-view/albuns-main-view.component';
import { AlbunsViewComponent } from './albuns-view/albuns-view.component';


const routes: Routes = [
  { path: "albums", component: LayoutComponent, children: [
    { path: "form", component: AlbunsFormComponent, canActivate: [AuthGuard] },
    { path: ":id/foto-form", component: AlbunsFotoFormComponent, canActivate: [AuthGuard] },
    { path: "all", component: AlbunsMainViewComponent },
    { path: "view/:id", component: AlbunsViewComponent },
    { path: "lista", component: AlbunsListaComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: '/albums/lista', pathMatch: 'full' }  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
