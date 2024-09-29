import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsAppComponent } from './flashcards-app.component';

describe('FlashcardsAppComponent', () => {
  let component: FlashcardsAppComponent;
  let fixture: ComponentFixture<FlashcardsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
