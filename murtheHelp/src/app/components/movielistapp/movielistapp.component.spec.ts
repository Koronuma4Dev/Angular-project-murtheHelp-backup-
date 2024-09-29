import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistappComponent } from './movielistapp.component';

describe('MovielistappComponent', () => {
  let component: MovielistappComponent;
  let fixture: ComponentFixture<MovielistappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovielistappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
