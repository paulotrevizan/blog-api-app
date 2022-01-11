import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListaComponent } from './posts-lista.component';

describe('PostsListaComponent', () => {
  let component: PostsListaComponent;
  let fixture: ComponentFixture<PostsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
