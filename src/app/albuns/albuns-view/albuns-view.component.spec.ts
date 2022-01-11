import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsViewComponent } from './albuns-view.component';

describe('AlbunsViewComponent', () => {
  let component: AlbunsViewComponent;
  let fixture: ComponentFixture<AlbunsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
