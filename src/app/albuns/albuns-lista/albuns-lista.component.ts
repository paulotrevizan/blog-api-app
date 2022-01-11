import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbunsService } from 'src/app/albuns.service';
import { AuthService } from 'src/app/auth.service';
import { Album } from '../album';

@Component({
  selector: 'app-albuns-lista',
  templateUrl: './albuns-lista.component.html',
  styleUrls: ['./albuns-lista.component.css']
})
export class AlbunsListaComponent implements OnInit {

  albums: Album[] = [];
  albumSelecionado: Album;
  mensagemSucesso: string;
  mensagemErro: string;
  usuarioId: number;

  constructor(private service: AlbunsService, private router: Router,
    private authService: AuthService) { 

  }

  ngOnInit(): void {
    this.authService.getUsuarioByUsername(this.authService.getUsuarioAutenticado())
      .subscribe(response => { 
        this.usuarioId = response.id;
  
        this.service.getAlbuns(this.usuarioId)
          .subscribe(response => this.albums = response);        
    });
  }

  novoAlbum() {
    this.router.navigate(['/albums/form'])
  }

  preparaDelete(album: Album) {
    this.albumSelecionado = album;
  }

  deletarAlbum() {
    this.service.deletar(this.albumSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = "Álbum de fotos deletado com sucesso."
        this.ngOnInit();
      },
      erro => {
        this.mensagemErro = "Ocorreu um erro ao deletar o álbum de fotos."
    });
  }

}
