import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofElementsComponent } from './tableof-elements.component';

describe('TableofElementsComponent', () => {
  let component: TableofElementsComponent;
  let fixture: ComponentFixture<TableofElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableofElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableofElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
