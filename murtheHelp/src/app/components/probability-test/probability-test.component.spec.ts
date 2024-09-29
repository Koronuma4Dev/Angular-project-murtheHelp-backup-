import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityTestComponent } from './probability-test.component';

describe('ProbabilityTestComponent', () => {
  let component: ProbabilityTestComponent;
  let fixture: ComponentFixture<ProbabilityTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProbabilityTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
