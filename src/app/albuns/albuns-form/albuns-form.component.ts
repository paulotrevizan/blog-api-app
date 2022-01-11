import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbunsService } from 'src/app/albuns.service';
import { AuthService } from 'src/app/auth.service';
import { Album } from '../album';

@Component({
  selector: 'app-albuns-form',
  templateUrl: './albuns-form.component.html',
  styleUrls: ['./albuns-form.component.css']
})
export class AlbunsFormComponent implements OnInit {

  album: Album;
  success: boolean = false;
  errors: String[];

  constructor(private service: AlbunsService, private router: Router,
    private authService: AuthService) { 
    this.album = new Album();
  }

  ngOnInit(): void {
    this.authService.getUsuarioByUsername(this.authService.getUsuarioAutenticado())
    .subscribe(response => { 
      this.album.usuarioId = response.id 
    });
  }

  onSubmit() {
    this.service
      .salvar(this.album)
      .subscribe(response => {        
        this.success = true;
        this.errors = null;
        this.router.navigate(["/albums"]);
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
    });
  }

}
