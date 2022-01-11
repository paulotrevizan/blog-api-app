import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../posts/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.getPostsAll()
      .subscribe(response => { 
        this.posts = response;
    });
  }

}
