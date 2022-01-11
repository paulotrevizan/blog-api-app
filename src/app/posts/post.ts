import { ComentarioPost } from "./comentario-post";
import { Usuario } from "../login/usuario";

export class Post {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    titulo: string;
    conteudo: string;
    imagemCapa: string;
    data: string;
    comentarios: ComentarioPost[];
}