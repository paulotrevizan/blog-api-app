import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsListaComponent } from './albuns-lista.component';

describe('AlbunsListaComponent', () => {
  let component: AlbunsListaComponent;
  let fixture: ComponentFixture<AlbunsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
