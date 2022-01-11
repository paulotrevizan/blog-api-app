import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './posts/post';
import { environment } from 'src/environments/environment';
import { ComentarioPost } from './posts/comentario-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = environment.apiUrlServer + '/api/postagens';

  constructor(private http: HttpClient) { 

  }  

  salvar(post: Post) : Observable<any> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  getPostsAll() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }  

  getPosts(usuarioId: number) : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }

  getPostById(id: number) : Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  deletar(post: Post): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${post.id}`);
  }

  salvarComentario(postId: number, comentarioPost: ComentarioPost): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${postId}/comentarios/`, comentarioPost);
  }

  deletarComentario(postId: number, comentarioId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${postId}/comentarios/${comentarioId}`);
  }  

}
