import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostsService } from 'src/app/posts.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  post: Post;
  success: boolean = false;
  errors: String[];

  constructor(private service: PostsService, private authService: AuthService) { 
    this.post = new Post();
  }

  ngOnInit(): void {
    this.authService.getUsuarioByUsername(this.authService.getUsuarioAutenticado())
    .subscribe(response => { 
      this.post.usuarioId = response.id 
    });
  }

  onSubmit() {
    this.service
      .salvar(this.post)
      .subscribe(response => {        
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
    });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var strImage = reader.result as string; 
      this.post.imagemCapa = strImage.replace(/^data:image\/[a-z]+;base64,/, "");
    };
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
