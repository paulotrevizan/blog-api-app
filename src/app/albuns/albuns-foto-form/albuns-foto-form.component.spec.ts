import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsFotoFormComponent } from './albuns-foto-form.component';

describe('AlbunsFotoFormComponent', () => {
  let component: AlbunsFotoFormComponent;
  let fixture: ComponentFixture<AlbunsFotoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsFotoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsFotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
