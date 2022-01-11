import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  nome: string;
  usuarioId: number;
  cadastroUsuario: boolean;
  mensagemSucesso: string;
  error: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.tentarLogin(this.username, this.password)
      .subscribe(response => {
        const accessToken : string = JSON.stringify(response);
        localStorage.setItem('access_token', accessToken);
        this.router.navigateByUrl('/home');  
      }, errorResponse => {
        this.error = 'Usuário/senha inválidos.'
    });
  }

  preparaCadastroUsuario(event) {
    event.preventDefault();
    this.cadastroUsuario = true;
  }

  cancelaCadastro() {
    this.cadastroUsuario = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.nome = this.nome;

    this.authService.salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso = 'Cadastro realizado com sucesso, efetue o login.';        
        this.error = null;
        this.cadastroUsuario = false;
        this.username = '';
        this.password = '';
        this.nome = '';
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.error = errorResponse.error.message;
    });
  }

}
