import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordreverseComponent } from './wordreverse.component';

describe('WordreverseComponent', () => {
  let component: WordreverseComponent;
  let fixture: ComponentFixture<WordreverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordreverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
