import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsFormComponent } from './albuns-form.component';

describe('AlbunsFormComponent', () => {
  let component: AlbunsFormComponent;
  let fixture: ComponentFixture<AlbunsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
