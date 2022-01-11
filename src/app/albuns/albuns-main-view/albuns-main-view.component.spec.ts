import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsMainViewComponent } from './albuns-main-view.component';

describe('AlbunsMainViewComponent', () => {
  let component: AlbunsMainViewComponent;
  let fixture: ComponentFixture<AlbunsMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
