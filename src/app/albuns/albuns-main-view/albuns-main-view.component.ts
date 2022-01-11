import { Component, OnInit } from '@angular/core';
import { AlbunsService } from 'src/app/albuns.service';
import { Album } from '../album';

@Component({
  selector: 'app-albuns-main-view',
  templateUrl: './albuns-main-view.component.html',
  styleUrls: ['./albuns-main-view.component.css']
})
export class AlbunsMainViewComponent implements OnInit {

  albums: Album[];

  constructor(private service: AlbunsService) { } 

  ngOnInit(): void {
    this.service.getAlbunsAll()
      .subscribe(response => { 
        this.albums = response;
    });
  }

}
