import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbunsService } from 'src/app/albuns.service';
import { Album } from '../album';
import { Foto } from '../foto';

@Component({
  selector: 'app-albuns-foto-form',
  templateUrl: './albuns-foto-form.component.html',
  styleUrls: ['./albuns-foto-form.component.css']
})
export class AlbunsFotoFormComponent implements OnInit {

  album: Album;
  foto: Foto;
  id: number;
  success: boolean = false;
  errors: String[];

  constructor(private service: AlbunsService, private activatedRoute: ActivatedRoute) { 
    this.album = new Album();
    this.foto = new Foto();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getAlbumById(this.id)
          .subscribe(response => {
            this.album = response;
          },
          errorResponse => this.album = new Album());
      }
    });
  }

  onSubmit() {
    this.service
      .salvarFoto(this.album.id, this.foto)
      .subscribe(response => {        
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
    });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var strImage = reader.result as string; 
      this.foto.imagem = strImage.replace(/^data:image\/[a-z]+;base64,/, "");
    };
  }

}
