import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomletterComponent } from './randomletter.component';

describe('RandomletterComponent', () => {
  let component: RandomletterComponent;
  let fixture: ComponentFixture<RandomletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
