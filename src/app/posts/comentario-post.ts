import { Usuario } from "../login/usuario";

export class ComentarioPost {
    id: number;
    usuario: Usuario;
    usuarioId: number;
    conteudo: string;
    data: string;
}