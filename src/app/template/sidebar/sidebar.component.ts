import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nomeUsuarioLogado: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.nomeUsuarioLogado = this.authService.getUsuarioAutenticado();
  }

  sair() {
    if (this.authService.logout()) {
      this.nomeUsuarioLogado = null;
      this.router.navigate(["/home"]) 
    }

  }

}
