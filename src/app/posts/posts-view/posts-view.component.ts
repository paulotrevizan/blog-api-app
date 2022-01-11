import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { PostsService } from 'src/app/posts.service';
import { ComentarioPost } from '../comentario-post';
import { Post } from '../post';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  post: Post;
  id: number;
  logado: boolean;
  usuarioId: number;
  conteudoComentario: string;
  mensagemErro: string;
  comentarioSelecionado: ComentarioPost;
  mensagemErroComentario: string;

  constructor(private service: PostsService, private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getPostById(this.id)
          .subscribe(response => {
            this.post = response;
          },
          errorResponse => this.post = new Post());
      }
    });
    
    this.logado = this.authService.getUsuarioAutenticado() as unknown as boolean;

    this.authService.getUsuarioByUsername(this.authService.getUsuarioAutenticado())
      .subscribe(response => { 
        this.usuarioId = response.id;
    });
  }

  salvarComentario() {
    const comentario: ComentarioPost = new ComentarioPost();
    comentario.usuarioId = this.usuarioId;
    comentario.conteudo = this.conteudoComentario;

    this.service.salvarComentario(this.id, comentario)
      .subscribe(response => {
        this.ngOnInit();
      },
      erro => {
        this.mensagemErro = "Ocorreu um erro ao enviar o comentário."
    });
  }

  preparaDeleteComentario(comentario: ComentarioPost) {
    this.comentarioSelecionado = comentario;
  }  

  deletarComentario() {
    this.service.deletarComentario(this.id, this.comentarioSelecionado.id)
      .subscribe(response => {
        this.ngOnInit();
      },
      erro => {
        this.mensagemErroComentario = "Ocorreu um erro ao deletar o comentário."
    });
  }

}
