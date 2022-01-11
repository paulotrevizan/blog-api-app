import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './albuns/album';
import { Foto } from './albuns/foto';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  apiUrl: string = environment.apiUrlServer + '/api/albuns';

  constructor(private http: HttpClient) { 

  }  

  salvar(album: Album) : Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  getAlbunsAll() : Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }  

  getAlbuns(usuarioId: number) : Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }

  getAlbumById(id: number) : Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  deletar(post: Album): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${post.id}`);
  }

  salvarFoto(albumFotoId: number, foto: Foto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${albumFotoId}/fotos/`, foto);
  }

}
