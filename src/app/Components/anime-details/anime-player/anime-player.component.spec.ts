import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePlayerComponent } from './anime-player.component';

describe('AnimePlayerComponent', () => {
  let component: AnimePlayerComponent;
  let fixture: ComponentFixture<AnimePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
