import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTComponent } from './movie-t.component';

describe('MovieTComponent', () => {
  let component: MovieTComponent;
  let fixture: ComponentFixture<MovieTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
