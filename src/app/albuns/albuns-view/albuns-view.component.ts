import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Observable } from 'rxjs';
import { AlbunsService } from 'src/app/albuns.service';
import { Album } from '../album';

@Component({
  selector: 'app-albuns-view',
  templateUrl: './albuns-view.component.html',
  styleUrls: ['./albuns-view.component.css']
})
export class AlbunsViewComponent implements OnInit {

  id: number;
  album: Album;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galeria = [];
  albumSemFotos: boolean;

  constructor(private service: AlbunsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getFotos(); 
  }

  getFotos() { 
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getAlbumById(this.id)
          .subscribe(response => {
            this.album = response;

            this.album.fotos.forEach((foto) => {
              let imagem = 'data:image/png;base64,' + foto.imagem;
              this.galeria.push({
                small: imagem,
                medium: imagem,
                big: imagem,
              })
            });

            this.albumSemFotos = response.fotos.length == 0;
          },
          errorResponse => this.album = new Album()
        );
      }
    });

    return this.galeria;
  }
    
}
