import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistlistComponent } from './playlistlist.component';

describe('PlaylistlistComponent', () => {
  let component: PlaylistlistComponent;
  let fixture: ComponentFixture<PlaylistlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
