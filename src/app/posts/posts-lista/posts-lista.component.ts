import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PostsService } from 'src/app/posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-lista',
  templateUrl: './posts-lista.component.html',
  styleUrls: ['./posts-lista.component.css']
})
export class PostsListaComponent implements OnInit {

  posts: Post[] = [];
  postSelecionado: Post;
  mensagemSucesso: string;
  mensagemErro: string;
  usuarioId: number;

  constructor(private service: PostsService, private router: Router,
    private authService: AuthService) { 

  }

  ngOnInit(): void {
    this.authService.getUsuarioByUsername(this.authService.getUsuarioAutenticado())
      .subscribe(response => { 
        this.usuarioId = response.id;
  
        this.service.getPosts(this.usuarioId)
          .subscribe(response => this.posts = response);        
    });
  }

  novoPost() {
    this.router.navigate(['/posts/form'])
  }

  preparaDelete(post: Post) {
    this.postSelecionado = post;
  }

  deletarPost() {
    this.service.deletar(this.postSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = "Post deletado com sucesso."
        this.ngOnInit();
      },
      erro => {
        this.mensagemErro = "Ocorreu um erro ao deletar o post."
    });
  }

}
