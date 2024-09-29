import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcrochetideasComponent } from './randomcrochetideas.component';

describe('RandomcrochetideasComponent', () => {
  let component: RandomcrochetideasComponent;
  let fixture: ComponentFixture<RandomcrochetideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomcrochetideasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcrochetideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
