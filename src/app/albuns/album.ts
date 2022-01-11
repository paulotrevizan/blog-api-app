import { Usuario } from "../login/usuario";
import { Foto } from "./foto";

export class Album {
    id: number;
    usuarioId: number;
    nome: string;
    usuario: Usuario;
    fotos: Foto[];
}